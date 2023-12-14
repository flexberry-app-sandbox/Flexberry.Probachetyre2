import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probachetyre-журнал-заказов-l');
  this.route('i-i-s-probachetyre-журнал-заказов-e',
  { path: 'i-i-s-probachetyre-журнал-заказов-e/:id' });
  this.route('i-i-s-probachetyre-журнал-заказов-e.new',
  { path: 'i-i-s-probachetyre-журнал-заказов-e/new' });
  this.route('i-i-s-probachetyre-заказ-l');
  this.route('i-i-s-probachetyre-заказ-e',
  { path: 'i-i-s-probachetyre-заказ-e/:id' });
  this.route('i-i-s-probachetyre-заказ-e.new',
  { path: 'i-i-s-probachetyre-заказ-e/new' });
  this.route('i-i-s-probachetyre-контрагент-l');
  this.route('i-i-s-probachetyre-контрагент-e',
  { path: 'i-i-s-probachetyre-контрагент-e/:id' });
  this.route('i-i-s-probachetyre-контрагент-e.new',
  { path: 'i-i-s-probachetyre-контрагент-e/new' });
  this.route('i-i-s-probachetyre-мастер-l');
  this.route('i-i-s-probachetyre-мастер-e',
  { path: 'i-i-s-probachetyre-мастер-e/:id' });
  this.route('i-i-s-probachetyre-мастер-e.new',
  { path: 'i-i-s-probachetyre-мастер-e/new' });
  this.route('i-i-s-probachetyre-номенклатура-l');
  this.route('i-i-s-probachetyre-номенклатура-e',
  { path: 'i-i-s-probachetyre-номенклатура-e/:id' });
  this.route('i-i-s-probachetyre-номенклатура-e.new',
  { path: 'i-i-s-probachetyre-номенклатура-e/new' });
});

export default Router;
