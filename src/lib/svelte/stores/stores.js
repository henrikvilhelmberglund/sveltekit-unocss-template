import { writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

export const color = persisted(
	"color",
	null,
	// avoid stringifying the string adding quotes
	{
		serializer: {
			stringify: (val) => val,
			parse: (val) => val,
		},
	}
);
