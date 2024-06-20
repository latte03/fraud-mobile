<script lang="ts" setup>
import type { FieldRule, PickerColumn } from 'vant'

interface PropsType {
  columns: PickerColumn
  rowKey?: string
  textKey?: string
  placeholder?: string
  label: string
  rules?: FieldRule[]
  name: string
}
defineOptions({
  name: 'FormFieldPicker',
})
const props = withDefaults(defineProps<PropsType>(), {
  rowKey: 'value',
  textKey: 'text',
  placeholder: '请选择',
  rules: () => [],
})

const text = defineModel<any>('text')
const modelValue = defineModel<any>('modelValue')
const show = defineModel<boolean>('show')

const onConfirm = ({ selectedOptions }: any) => {
  modelValue.value = selectedOptions[0]?.[props.rowKey]
  console.log('%c Line:29 🍷 modelValue.value', 'color:#4fff4B', modelValue.value)
  text.value = selectedOptions[0]?.[props.textKey]
  show.value = false
}

function onFieldClick() {
  show.value = true
}
</script>

<template>
  <div>
    <van-field
      v-model="text"
      is-link
      readonly
      :name="name"
      :label="label"
      :placeholder="placeholder"
      :rules="rules"
      @click="onFieldClick"
    />
    <van-popup :show="show" position="bottom">
      <van-picker :columns="columns" @confirm="onConfirm" @cancel="show = false" />
    </van-popup>
  </div>
</template>

<style lang="less" scoped>
.FormFieldPicker {
}
</style>
