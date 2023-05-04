import Mustache from "mustache";

test("Mustache Tags", () => {
	const data = Mustache.render("Hello, {{name}} my hobby is {{{hobby}}}", {
		name: "Rendra",
		hobby: `<p>Programming</p>`,
	});

	expect(data).toBe("Hello, Rendra my hobby is <p>Programming</p>");
});
