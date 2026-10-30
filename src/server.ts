import fastify from 'fastify';

const server = fastify({
  logger: { prettyPrint: process.env.NODE_ENV?.toLowerCase() !== 'production' },
});

server.register(require('./routes'))

server.listen({host: process.env.HOST || "127.0.0.1", port: Number(process.env.PORT) || 3000}, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});

async function closeGracefully(signal: NodeJS.Signals) {
  server.log.info(`Received signal to terminate: ${signal}`);

  await server.close();
  process.kill(process.pid, signal);
}
process.once('SIGINT', closeGracefully);
process.once('SIGTERM', closeGracefully);
