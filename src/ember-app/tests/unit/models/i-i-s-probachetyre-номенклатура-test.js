import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probachetyre-номенклатура', 'Unit | Model | i-i-s-probachetyre-номенклатура', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
