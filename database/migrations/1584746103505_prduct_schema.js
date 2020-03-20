'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrductSchema extends Schema {
  up () {
    this.create('prducts', (table) => {
      table.increments()
      table.string('name',200)
      table.integer('image_id').unsigne()
      table.text('description')
      table.decimal('price',12,2)
      table.foreign('image_id').reference('id').inTable('images').onDelete('cascade')
      table.timestamps()
    })

    this.create('image_product',(table)=>{
      table.increments()
      table.integer('image_id')
      table.integer('product_id')
      table.foreign('image_id').reference('id').inTable('images').onDelete('cascade')
      table.foreign('product_id').reference('id').inTable('products').onDelete('cascade')
    })
  }

  down () {
    this.drop('image_product')
    this.drop('prducts')
  }
}

module.exports = PrductSchema
