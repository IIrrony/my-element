<template>
  <div>
    <Select
      v-model="selected"
      :options="options"
      placeholder="请输入关键词搜索"
      filterable
      remote
      :remote-method="handleFetch"
      clearable
    />
    <p>当前选择: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Select from '../../../src/components/Select/Select.vue';
import type { SelectOption } from '../../../src/components/Select/types';

const selected = ref('');
const options = ref<SelectOption[]>([]);

// 模拟远程数据
const remoteData = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' },
  { label: '南京', value: 'nanjing' },
  { label: '成都', value: 'chengdu' },
  { label: '武汉', value: 'wuhan' },
  { label: '西安', value: 'xian' },
  { label: '重庆', value: 'chongqing' },
  { label: '天津', value: 'tianjin' },
  { label: '苏州', value: 'suzhou' },
  { label: '厦门', value: 'xiamen' },
  { label: '青岛', value: 'qingdao' },
  { label: '大连', value: 'dalian' },
  { label: '长沙', value: 'changsha' },
  { label: '郑州', value: 'zhengzhou' },
  { label: '昆明', value: 'kunming' },
  { label: '济南', value: 'jinan' },
  { label: '合肥', value: 'hefei' },
  { label: '福州', value: 'fuzhou' },
  { label: '沈阳', value: 'shenyang' },
  { label: '长春', value: 'changchun' },
  { label: '贵阳', value: 'guiyang' },
  { label: '南宁', value: 'nanning' },
  { label: '哈尔滨', value: 'harbin' },
  { label: '太原', value: 'taiyuan' },
  { label: '石家庄', value: 'shijiazhuang' },
  { label: '乌鲁木齐', value: 'wulumuqi' },
  { label: '拉萨', value: 'lasa' },
  { label: '南昌', value: 'nanchang' },
  { label: '海口', value: 'haikou' },
  { label: '兰州', value: 'lanzhou' },
  { label: '银川', value: 'yinchuan' },
  { label: '西宁', value: 'xining' },
  { label: '呼和浩特', value: 'huhehaote' },
  { label: '台北', value: 'taipei' },
  { label: '香港', value: 'hongkong' },
  { label: '澳门', value: 'macau' },
  { label: '宁波', value: 'ningbo' },
  { label: '温州', value: 'wenzhou' },
  { label: '无锡', value: 'wuxi' },
  { label: '常州', value: 'changzhou' },
  { label: '东莞', value: 'dongguan' },
  { label: '佛山', value: 'foshan' },
];

// 模拟远程搜索方法
const remoteMethod = (query: string): Promise<SelectOption[]> => {
  return new Promise((resolve) => {
    if (query.trim() === '') {
      resolve([]);
      return;
    }

    // 模拟网络请求延迟
    setTimeout(() => {
      const results = remoteData.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 800);
  });
};

const handleFetch = (query) => {
  if(!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
  .then(res => res.json())
  .then(({items}) => {
    return items.slice(0, 10).map(item => ({ label: item.name, value: item.node_id }))
  })
}
</script>
