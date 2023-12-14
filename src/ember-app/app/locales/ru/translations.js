import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbachetyreЖурналЗаказовLForm from './forms/i-i-s-probachetyre-журнал-заказов-l';
import IISProbachetyreЗаказLForm from './forms/i-i-s-probachetyre-заказ-l';
import IISProbachetyreКонтрагентLForm from './forms/i-i-s-probachetyre-контрагент-l';
import IISProbachetyreМастерLForm from './forms/i-i-s-probachetyre-мастер-l';
import IISProbachetyreНоменклатураLForm from './forms/i-i-s-probachetyre-номенклатура-l';
import IISProbachetyreЖурналЗаказовEForm from './forms/i-i-s-probachetyre-журнал-заказов-e';
import IISProbachetyreЗаказEForm from './forms/i-i-s-probachetyre-заказ-e';
import IISProbachetyreКонтрагентEForm from './forms/i-i-s-probachetyre-контрагент-e';
import IISProbachetyreМастерEForm from './forms/i-i-s-probachetyre-мастер-e';
import IISProbachetyreНоменклатураEForm from './forms/i-i-s-probachetyre-номенклатура-e';
import IISProbachetyreЖурналЗаказовModel from './models/i-i-s-probachetyre-журнал-заказов';
import IISProbachetyreЗаказModel from './models/i-i-s-probachetyre-заказ';
import IISProbachetyreКонтрагентModel from './models/i-i-s-probachetyre-контрагент';
import IISProbachetyreМастерModel from './models/i-i-s-probachetyre-мастер';
import IISProbachetyreНоменклатураModel from './models/i-i-s-probachetyre-номенклатура';
import IISProbachetyreРасчетЗаказаModel from './models/i-i-s-probachetyre-расчет-заказа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probachetyre-журнал-заказов': IISProbachetyreЖурналЗаказовModel,
    'i-i-s-probachetyre-заказ': IISProbachetyreЗаказModel,
    'i-i-s-probachetyre-контрагент': IISProbachetyreКонтрагентModel,
    'i-i-s-probachetyre-мастер': IISProbachetyreМастерModel,
    'i-i-s-probachetyre-номенклатура': IISProbachetyreНоменклатураModel,
    'i-i-s-probachetyre-расчет-заказа': IISProbachetyreРасчетЗаказаModel
  },

  'application-name': 'Probachetyre',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probachetyre',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probachetyre',
          title: 'Probachetyre'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-probachetyre-контрагент-l': {
              caption: 'Контрагенты',
              title: 'Контрагент'
            },
            'i-i-s-probachetyre-мастер-l': {
              caption: 'Мастеры',
              title: 'Мастер'
            },
            'i-i-s-probachetyre-номенклатура-l': {
              caption: 'Номенклатура',
              title: 'Номенклатура'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-probachetyre-заказ-l': {
              caption: 'Оформление заказов',
              title: 'Заказ'
            },
            'i-i-s-probachetyre-журнал-заказов-l': {
              caption: 'Журнал заказов',
              title: 'Журнал заказов'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probachetyre-журнал-заказов-l': IISProbachetyreЖурналЗаказовLForm,
    'i-i-s-probachetyre-заказ-l': IISProbachetyreЗаказLForm,
    'i-i-s-probachetyre-контрагент-l': IISProbachetyreКонтрагентLForm,
    'i-i-s-probachetyre-мастер-l': IISProbachetyreМастерLForm,
    'i-i-s-probachetyre-номенклатура-l': IISProbachetyreНоменклатураLForm,
    'i-i-s-probachetyre-журнал-заказов-e': IISProbachetyreЖурналЗаказовEForm,
    'i-i-s-probachetyre-заказ-e': IISProbachetyreЗаказEForm,
    'i-i-s-probachetyre-контрагент-e': IISProbachetyreКонтрагентEForm,
    'i-i-s-probachetyre-мастер-e': IISProbachetyreМастерEForm,
    'i-i-s-probachetyre-номенклатура-e': IISProbachetyreНоменклатураEForm
  },

});

export default translations;
