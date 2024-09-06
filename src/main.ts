import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command('serve [port]', 'start the server', (yargs) => {
        return yargs
            .env()
            .option('debug', {
                describe: 'Enable debug logging',
                type: "boolean",
                default: false,
            })
            .option('insecure', {
                describe: 'Disable gRPC transport security',
                type: "boolean",
                default: false,
            })
            .option('tls-certs-dir', {
                describe: 'A directory containing mTLS server certs (tls.key and tls.crt), and a CA used to verify clients (ca.crt).',
                type: "string",
                default: "",
            })
    }, (argv) => {

    })
    .parse()