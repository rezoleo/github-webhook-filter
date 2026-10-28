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

// Give in-flight requests time to finish, but exit before Docker's 10s stop timeout sends SIGKILL
const SHUTDOWN_TIMEOUT_MS = 5000;

async function closeGracefully(signal: NodeJS.Signals) {
  server.log.info(`Received signal to terminate: ${signal}`);

  setTimeout(() => {
    server.log.error(`Server did not close within ${SHUTDOWN_TIMEOUT_MS}ms, forcing exit`);
    process.exit(1);
  }, SHUTDOWN_TIMEOUT_MS).unref();

  try {
    await server.close();
    // await other things we should cleanup nicely
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
  // Re-send the signal now that the handler is removed, so the process exits with the expected code
  process.kill(process.pid, signal);
}
process.once('SIGINT', closeGracefully);
process.once('SIGTERM', closeGracefully);
