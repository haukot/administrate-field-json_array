# coding: utf-8
require 'administrate/engine'
require 'administrate/field/base'
require 'rails'

module Administrate
  module Field
    class JSONArray < Administrate::Field::Base
      include ActionView::Helpers::FormTagHelper

      def to_s
        return '-' unless data

        data.to_s
      end

      def values
        return [] unless data.is_a? Array

        data
      end

      def input(schema_type, *args)
        case schema_type
        when :number
          number_field_tag(*args)
        when :text
          text_area_tag(*args)
        else
          text_field_tag(*args)
        end
      end

      def schema
        raise 'Schema is required' unless options || options[:schema].empty?

        @_json_array_schema ||= options[:schema].map { |k, v| [k.to_s, v] }.to_h
      end

      class Engine < ::Rails::Engine
        Administrate::Engine.add_javascript 'administrate-field-json_array/application'
        Administrate::Engine.add_stylesheet 'administrate-field-json_array/application'
      end
    end
  end
end
