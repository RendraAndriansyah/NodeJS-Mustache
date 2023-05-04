import mustache from "mustache";
import fs from "fs/promises";

test("Mustache Partials", async () => {
	const partials = await fs
		.readFile("./templates/partials.mustache")
		.then((data) => data.toString());

	const content = await fs
		.readFile("./templates/content-partials.mustache")
		.then((data) => String(data));

	const data = mustache.render(
		content,
		{
			title: "partial content",
			content: "Hello Rendra this is content",
		},
		{
			header: partials,
		}
	);

	console.log(data);
	expect(data).toContain("Rendra");
});
