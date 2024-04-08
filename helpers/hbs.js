const moment = require('moment')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).utc().format(format)
    },
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {
            let new_str = str + ' '
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(' '))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + '...'
        }
        return str
    },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '')
    },
    editIcon: function (storyUser, loggedUser, storyId, floating = true) {
        if (storyUser._id.toString() == loggedUser._id.toString()) {
            if (floating) {
                return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
            } else {
                return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`
            }
        } else {
            return ''
        }
    },
    select: function (selected, options) {
        const renderedOptions = options.fn(this) // Render the options inside the select element
        const selectedAttr = ' selected' // Attribute to mark the selected option

        // Remove the selected attribute from all options
        let processedOptions = renderedOptions.replace(/ selected/g, '')

        // Add the selected attribute to the option with the selected value
        processedOptions = processedOptions.replace(
            `value='${selected}'`, // Match the value attribute of the selected option
            `value='${selected}'${selectedAttr}` // Append the selected attribute to the selected option
        )

        return processedOptions // Return the modified options string
    },
}
