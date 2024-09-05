import * as v1 from "./gen/v1/run_function_pb"
import * as v1beta1 from "./gen/v1beta1/run_function_pb"
import { FunctionRunnerService as v1FunctionRunnerService } from "../gen/v1/run_function_connect";
import { FunctionRunnerService as v1beta1FunctionRunnerService } from "../gen/v1beta1/run_function_connect";
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import { PartialMessage } from "@bufbuild/protobuf";

export async function newFunction(fn: (req: v1.RunFunctionRequest) => PartialMessage<v1.RunFunctionResponse>) {
    const server = fastify({
        http2: true
    });
    await server.register(fastifyConnectPlugin, {
        routes(router) {
            router
                .service(v1FunctionRunnerService, {
                    async runFunction(request, _context) {
                        const b = request.toBinary();
                        const req = v1.RunFunctionRequest.fromBinary(b);
                        const rsp = new v1.RunFunctionResponse(fn(req));

                        return rsp;
                    }
                })
                .service(v1beta1FunctionRunnerService, {
                    async runFunction(request, _context) {
                        const b = request.toBinary();
                        const gareq = v1.RunFunctionRequest.fromBinary(b);

                        const garsp = new v1.RunFunctionResponse(fn(gareq));

                        const bResp = garsp.toBinary();
                        return v1beta1.RunFunctionResponse.fromBinary(bResp);
                    }
                });
        },
    });
    await server.listen({ host: "localhost", port: 8443 });
    console.log("server is listening at", server.addresses());
}