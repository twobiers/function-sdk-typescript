import type { ConnectRouter } from "@connectrpc/connect";
import { FunctionRunnerService } from "../gen/v1/run_function_connect";

export default (router: ConnectRouter) =>
    router.service(FunctionRunnerService, {
        async runFunction(request, context) {

        }
    });