import * as v1 from "./gen/v1/run_function_pb"
import * as v1beta1 from "./gen/v1beta1/run_function_pb"
import { FunctionRunnerService as v1FunctionRunnerService } from "./gen/v1/run_function_connect";
import { FunctionRunnerService as v1beta1FunctionRunnerService } from "./gen/v1beta1/run_function_connect";
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import { PartialMessage } from "@bufbuild/protobuf";
import { readFileSync } from "fs";
import path from "path";

type MTLSCertificates = {
    key: string;
    cert: string;
    ca: string;
}

export type FunctionServeOpts = {
    insecure: boolean;
    mtlsCertificates: MTLSCertificates | Record<string, never>;
}

export function loadMTLSCertificates(dir?: string): MTLSCertificates | Record<string, never> {
    if (!dir) {
        return {};
    }

    return {
        key: readFileSync(path.join(dir, "tls.key"), "utf8"),
        cert: readFileSync(path.join(dir, "tls.crt"), "utf8"),
        ca: readFileSync(path.join(dir, "ca.crt"), "utf8"),
    }
}

export async function serve(
    fn: (req: v1.RunFunctionRequest) => Promise<PartialMessage<v1.RunFunctionResponse>>,
    opts: FunctionServeOpts
) {
    const server = fastify({
        http2: true,
        https: {
            ...opts.mtlsCertificates
        }
    });
    await server.register(fastifyConnectPlugin, {
        routes(router) {
            router
                .service(v1FunctionRunnerService, {
                    async runFunction(request, _context) {
                        const b = request.toBinary();
                        const req = v1.RunFunctionRequest.fromBinary(b);
                        const rsp = new v1.RunFunctionResponse(await fn(req));

                        return rsp;
                    }
                })
                .service(v1beta1FunctionRunnerService, {
                    async runFunction(request, _context) {
                        const betaBinary = request.toBinary();
                        const stableRequest = v1.RunFunctionRequest.fromBinary(betaBinary);

                        const stableResponse = new v1.RunFunctionResponse(await fn(stableRequest));

                        const stableResponseBinary = stableResponse.toBinary();
                        return v1beta1.RunFunctionResponse.fromBinary(stableResponseBinary);
                    }
                });
        },
    });
    await server.listen({ host: "localhost", port: 9443 });
    console.log("server is listening at", server.addresses());
}
