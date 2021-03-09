$LOAD_PATH.push File.expand_path('lib', __dir__)

Gem::Specification.new do |gem|
  gem.name = 'administrate-field-json_array'
  gem.version = '0.1.2'
  gem.authors = ['Dmitry Davydov']
  gem.email = ['haudvd@gmail.com']
  gem.homepage = 'https://github.com/haukot/administrate-field-json_array'
  gem.summary = 'Field plugin for Administrate to edit JSON array as table of inputs'
  gem.description = gem.summary
  gem.license = 'MIT'

  gem.require_paths = ['lib']
  gem.files = `git ls-files`.split("\n")
  gem.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")

  gem.add_runtime_dependency 'administrate', '< 1.0.0'
  gem.add_runtime_dependency 'rails', '>= 4.2', '< 7'

  gem.add_development_dependency 'rspec', '~> 3.7'
end
