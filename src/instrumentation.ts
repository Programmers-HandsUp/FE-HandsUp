export async function register() {
  console.log(
    "[instrumentation] server.listen()...",
    process.env.NEXT_RUNTIME,
    typeof window
  );
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const server = (await import("@/utils/mocks/server")).default;
    server.listen({
      onUnhandledRequest: "bypass"
    });
  }
}
