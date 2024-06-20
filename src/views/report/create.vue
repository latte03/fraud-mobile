<script lang="ts" setup>
import type { PickerColumn } from 'vant'
import { useRequest } from 'vue-request'

import { fraudApi } from '@/api/fraud'

defineOptions({
  name: 'ReportCreate',
})

const formModel = ref({
  address: '',
  content: '',
  fraudTel: '',
  typeId: '',
  fraudSms: '',
  fraudApp: '',
  fraudImg: [],
  fraudSound: [],
  fraudVedio: [],
  fraudWebsite: '',
  fraudAccounts: '',
})

const { data: typeList } = useRequest(fraudApi.getPublicizeType, {
  initialData: [],
})
const { runAsync } = useRequest(fraudApi.postReport, {
  manual: true,
})

const onSubmit = () => {
  runAsync(formModel.value)
  console.log('submit', formModel.value)
}
</script>

<template>
  <div class="ReportCreate">
    <van-form
      required="auto"
      validate-first
      scroll-to-error
      error-message-align="right"
      input-align="right"
      @submit="onSubmit"
    >
      <van-cell-group inset title="举报描述(选填项)">
        <FormFieldPicker
          v-model="formModel.typeId"
          name="typeId"
          label="诈骗类型"
          placeholder="请选择"
          :rules="[{ required: true, message: '请选择诈骗类型' }]"
          :columns="typeList as PickerColumn"
        />
        <van-field
          v-model="formModel.address"
          name="address"
          label="举报地"
          placeholder="请填写举报地"
          :rules="[{ required: false, message: '请选择诈骗类型' }]"
        />
        <van-field
          v-model="formModel.content"
          type="textarea"
          rows="1"
          autosize
          name="content"
          label="举报描述"
          :rules="[{ required: true, message: '请填写举报描述' }]"
          placeholder="请填写举报描述"
        />
      </van-cell-group>

      <van-cell-group inset title="举报内容(请至少填写一项)">
        <van-field
          v-model="formModel.fraudTel"
          name="fraudTel"
          label="诈骗电话"
          placeholder="请输入诈骗电话"
        />
        <van-field
          v-model="formModel.fraudSms"
          name="fraudSms"
          label="诈骗短信"
          placeholder="请输入诈骗短信"
        />
        <van-field
          v-model="formModel.fraudApp"
          name="fraudApp"
          label="APP应用程序"
          placeholder="请输入APP应用程序"
        />

        <van-field name="fraudImg" label="图片">
          <template #input>
            <van-uploader v-model="formModel.fraudImg" :max-count="1" />
          </template>
        </van-field>

        <van-field name="fraudSound" label="录音">
          <template #input>
            <van-uploader
              v-model="formModel.fraudSound"
              :max-count="1"
              :preview-full-image="false"
              accept=".mp3"
            >
              <van-button icon="plus" size="small" type="primary">上传文件</van-button>
            </van-uploader>
          </template>
        </van-field>

        <van-field name="fraudVedio" label="视频">
          <template #input>
            <van-uploader
              v-model="formModel.fraudVedio"
              :max-count="1"
              :preview-full-image="false"
              accept=".mp4"
            >
              <van-button icon="plus" size="small" type="primary">上传文件</van-button>
            </van-uploader>
          </template>
        </van-field>
      </van-cell-group>

      <van-cell-group inset>
        <template #title>
          <div class="flex-y-center justify-between">
            <span>无法直接上传线索</span>
            <div>
              <van-button size="small">直接录制</van-button>
            </div>
          </div>
        </template>
        <van-field
          v-model="formModel.fraudWebsite"
          name="fraudWebsite"
          label="诈骗网址"
          placeholder="请输入诈骗网址"
        />
        <van-field
          v-model="formModel.fraudAccounts"
          name="fraudAccounts"
          label="诈骗社交帐号"
          placeholder="请输入诈骗社交帐号"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="less" scoped>
.ReportCreate {
}
</style>
