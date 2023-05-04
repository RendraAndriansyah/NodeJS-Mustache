import Mustache from "mustache";

test("Mustache nested object", () => {
	const data = Mustache.render("Hello, {{person.name}}", {
		person: {
			name: "Rendra",
		},
	});

	expect(data).toBe("Hello, Rendra");
});
