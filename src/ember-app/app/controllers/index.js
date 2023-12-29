import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.заказы.справочники.caption'),
            title: i18n.t('forms.application.sitemap.заказы.справочники.title'),
            children: [{
              link: 'i-i-s-probachetyre-контрагент-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probachetyre-контрагент-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probachetyre-контрагент-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-probachetyre-мастер-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probachetyre-мастер-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probachetyre-мастер-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-probachetyre-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probachetyre-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probachetyre-номенклатура-l.title'),
              icon: 'folder',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.заказы.документация.caption'),
            title: i18n.t('forms.application.sitemap.заказы.документация.title'),
            children: [{
              link: 'i-i-s-probachetyre-заказ-l',
              caption: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probachetyre-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probachetyre-заказ-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-probachetyre-журнал-заказов-l',
              caption: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probachetyre-журнал-заказов-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probachetyre-журнал-заказов-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})