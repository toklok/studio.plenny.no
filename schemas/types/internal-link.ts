export default {
	name: "internalLink",
	type: "object",
	fields: [
		{
			name: "title",
			type: "string",
			validate: (Rule: any) => Rule.required(),
		},
		{
			name: "url",
			type: "reference",
			to: [{ type: "page" }, { type: "frontPage" }],
			validate: (Rule: any) => Rule.required(),
		},
	],
};