<script setup lang="ts">
defineOptions({
  name: 'ProfilePage',
})
definePage({
  name: 'ProfilePage',
  meta: {
    layout: 'tab-bar-layout',
    title: '我的',
    icon: 'tab-bar-outline-profile',
    activeIcon: 'tab-bar-fill-profile',
    sort: 3,
  },
})
</script>

<template>
  <div class="px-4">
    <WithAvatar />

    <div>
      <van-grid :column-num="3">
        <van-grid-item>
          <div>0</div>
          <div>指尖举报</div>
        </van-grid-item>
        <van-grid-item>
          <div>0</div>
          <div>线索提供</div>
        </van-grid-item>
        <van-grid-item>
          <div>0</div>
          <div>号码标注</div>
        </van-grid-item>
      </van-grid>
    </div>

    <div>
      <van-grid :column-num="2">
        <van-grid-item>
          <div>0</div>
          <div>音频录制</div>
        </van-grid-item>
        <van-grid-item>
          <div>0</div>
          <div>反炸手册</div>
        </van-grid-item>
      </van-grid>
    </div>

    <div>
      <van-cell-group>
        <van-cell icon="location-o" title="反馈与帮助" is-link>
          <template #icon>
            <SvgIcon
              name="cell-icon-help"
              style="width: 24px; height: 24px; margin-right: 8px; color: #f5a623"
            />
          </template>
        </van-cell>
        <van-cell title="联系社区" value="内容">
          <template #icon>
            <SvgIcon
              name="cell-icon-connect"
              style="width: 24px; height: 24px; margin-right: 8px; color: #7ed321"
            />
          </template>
        </van-cell>
        <van-cell title="社区导航" value="内容">
          <template #icon>
            <SvgIcon
              name="cell-icon-location"
              style="width: 24px; height: 24px; margin-right: 8px; color: #4a90e2"
            />
          </template>
        </van-cell>
        <van-cell title="长辈版" is-link>
          <template #icon>
            <SvgIcon
              name="cell-icon-old"
              style="width: 24px; height: 24px; margin-right: 8px; color: #8576da"
            />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
