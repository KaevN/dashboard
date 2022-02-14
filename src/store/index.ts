import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { DashboardItem } from '@/types/general'

type IState = {
  dashboardItems: DashboardItem[];
};

export const key: InjectionKey<Store<IState>> = Symbol('StoreInjectionKey');
export const useStore = () => baseUseStore(key);
export const store = createStore<IState>({
  state: {
    dashboardItems: [  {
      id: 1,
      title: 'default title 1',
      description: 'default descr',
    },
      {
        id: 2,
        title: 'a very long default title to indicate that it does not extend beyond the card',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }],
  },

  mutations: {
    setDashboardItems(state, value) {
      state.dashboardItems = value
    },
    pushToDashboardItems(state, value) {
      state.dashboardItems.push(value);
    },
  },
});
