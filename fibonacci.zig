const std = @import("std");

pub fn fibonacci(n: i32) i32 {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

pub fn main() void {}
