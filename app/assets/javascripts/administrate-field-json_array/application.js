// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require_tree .

$(function() {
  function processJsonArrayData($field, callback) {
    var $base = $field.parents('.json_array_field__base')
    var $dataField = $base.find('.json_array_field__data_field')
    var fieldValue = $dataField.val()
    var parsed = JSON.parse(fieldValue)

    var inputKey = $field.data('key')
    var index = $field.parents('tr').index() - 1 // 1 - because template row is first

    callback(parsed, index, inputKey)

    $dataField.val(JSON.stringify(parsed))
  }

  // Json array field interactions
  $(document).on('click', '.json_array_field__remove_row', function() {
    var $field = $(this)
    processJsonArrayData($field, (data, index) => {
      data.splice(index, 1)
    })

    $field.parents('tr').remove()

    return false
  })

  $(document).on('click', '.json_array_field__add_row', function(e) {
    var $base = $(this).parents('.json_array_field__base');
    var $templateRow = $base.find('.json_array_field__template_row')
    var $field = $templateRow.find('input') // FIXME: Bad, to save interface processJsonArrayData.
    var template = $templateRow.html()
    $base.find('tbody').append('<tr>' + template + '</tr>')

    processJsonArrayData($field, (data) => {
      data.push({}) // default values?..
    })

    e.preventDefault()
    return false
  })

  $(document).on('input', '.json_array_field__input', function() {
    var $field = $(this)
    processJsonArrayData($field, (data, index, inputKey) => {
      var value = $field.val()
      // TODO: more types? Maybe send a schema to js?
      if ($field.attr('type') === 'number') {
        value = parseFloat(value)
      }
      data[index][inputKey] = value
    })
  })

})
