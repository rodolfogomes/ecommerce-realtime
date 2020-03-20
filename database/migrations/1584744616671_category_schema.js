'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('title',100)
      table.string('descripiton',255)
      table.integer('image_id').unsigne()
      table.timestamps()
      table.foreing('image_id').references('id').inTable('images').onDelete('cascade')
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
