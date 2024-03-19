import { hello } from ".";
import { describe, expect, test } from "vitest";

describe("hello", () => {
	test("Should return hello", () => {
		expect(hello()).toBe("hello");
	});
});
