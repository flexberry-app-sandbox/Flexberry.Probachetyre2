import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probachetyre-мастер', 'Unit | Serializer | i-i-s-probachetyre-мастер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probachetyre-мастер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probachetyre-лица',
    'transform:i-i-s-probachetyre-статус',

    'model:i-i-s-probachetyre-журнал-заказов',
    'model:i-i-s-probachetyre-заказ',
    'model:i-i-s-probachetyre-контрагент',
    'model:i-i-s-probachetyre-мастер',
    'model:i-i-s-probachetyre-номенклатура',
    'model:i-i-s-probachetyre-расчет-заказа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
