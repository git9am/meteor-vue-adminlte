import Vue from 'vue';

import Box from './box/Box.vue';
import Tabs from './tab/Tabs.vue';
import TabItem from './tab/TabItem.vue';
import TabContent from './tab/TabContent.vue';

import WidgetInfoBox from './widgets/InfoBox.vue';
import WidgetProgressBox from './widgets/ProgressBox.vue';

import Modal from './Modal.vue';
import Crud from './Crud.vue';
import TabularTable from './TabularTable.vue';

Vue.component('box', Box);
Vue.component('tabs', Tabs);
Vue.component('tab-item', TabItem);
Vue.component('tab-content', TabContent);
Vue.component('widget-info-box', WidgetInfoBox);
Vue.component('widget-progress-box', WidgetProgressBox);
Vue.component('modal', Modal);
Vue.component('crud', Crud);
Vue.component('tabular-table', TabularTable);
