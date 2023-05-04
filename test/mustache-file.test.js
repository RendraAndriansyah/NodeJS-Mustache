import mustache from "mustache";
import fs from "fs/promises";

test("Mustache template file", async () => {
	const helloTemplate = await fs
		.readFile("./templates/hello.mustache")
		.then((data) => data.toString());

	const data = mustache.render(helloTemplate, {
		title: "Rendra",
	});

	expect(data).toContain("Rendra");
});
