import { useDesignSettingStore } from '@/store/modules/design-setting'

export function useDesignSetting() {
  const designStore = useDesignSettingStore()

  const getDarkMode = computed(() => designStore.darkMode)

  const getAppTheme = computed(() => designStore.appTheme)

  const getAppThemeList = computed(() => designStore.appThemeList)

  const getIsPageAnimate = computed(() => designStore.isPageAnimate)

  const getPageAnimateType = computed(() => designStore.pageAnimateType)

  return {
    getDarkMode,
    getAppTheme,
    getAppThemeList,
    getIsPageAnimate,
    getPageAnimateType,
  }
}
