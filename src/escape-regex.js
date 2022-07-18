const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

module.exports = value => {
	return value && reHasRegExpChar.test(value) ? value.replace(reRegExpChar, '\\$&') : value || '';
};
