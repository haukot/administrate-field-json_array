build:
	gem build administrate-field-json_array.gemspec

publish:
	gem push administrate-field-json_array-*.gem

.PHONY: build publish
