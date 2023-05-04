import mustache from "mustache";
import fs from "fs/promises";

test("test mustache comment", async () => {
	const comment = await fs
		.readFile("./templates/komentar.mustache")
		.then((data) => data.toString());

	const data = mustache.render(comment, {
		test: "ini coba",
	});
	console.log(data);
	expect(data).toContain("ini coba");
	expect(data).not.toContain("ini komentar");
});
