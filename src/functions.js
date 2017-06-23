const slugify = text => text.replace(/[\s_-]/g,'-').toLowerCase()

export {
	slugify
}