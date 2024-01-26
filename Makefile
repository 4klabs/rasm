build:
	@zig build-exe -O ReleaseSmall -target wasm32-wasi fibonacci.zig
