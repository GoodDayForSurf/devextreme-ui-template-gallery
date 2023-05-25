<template>
  <dx-drop-down-button
    class="theme-button"
    :split-button="true"
    :use-select-mode="false"
    :items="[{ id: 1, name: 'Profile', icon: 'user' }]"
    :icon="`icons/${currentMode === 'dark' ? 'sun' : 'moon'}.svg`"
    display-expr="name"
    key-expr="id"
    :drop-down-content-template="'dropdown'"
    :drop-down-options="{minWidth: 360}"
    @button-click="onClickButton"
  >
    <template #dropdown>
      <div class="dropdown-content">
        <div class="title bottom-border-separator">
          Themes
        </div>
        <div class="subtitle">
          Material Compact
        </div>
        <div class="items-container">
          <template
            v-for="(theme, index) in materialThemes"
            :key="index"
          >
            <dx-button
              icon="palette"
              type="normal"
              :style="{'--icon-color': theme.color}"
              styling-mode="outlined"
              :text="theme.color"
              @click="() => onThemeClick(theme)"
            />
          </template>
        </div>
        <div class="subtitle">
          Generic Compact
        </div>
        <div class="items-container">
          <template
            v-for="(theme, index) in genericThemes"
            :key="index"
          >
            <dx-button
              icon="palette"
              type="normal"
              :style="{'--icon-color': theme.color}"
              :text="theme.color"
              styling-mode="outlined"
              @click="() => onThemeClick(theme)"
            />
          </template>
        </div>
      </div>
    </template>
  </dx-drop-down-button>
<!-- @item-click="onItemClick" -->
</template>

<script setup lang="ts">
import { DxDropDownButton, DxButton } from 'devextreme-vue';
import { themeService } from '@/theme/theme-service';
import type { Theme } from '@/theme/theme-service';

const { currentMode } = themeService;

const materialThemes = themeService.availableThemes.filter((theme) => theme.type === 'material');
const genericThemes = themeService.availableThemes.filter((theme) => theme.type === 'generic');

function onClickButton() {
  themeService.switchAppThemeMode();
}

function onThemeClick(theme: Theme) {
  themeService.setAppTheme(theme);
}
</script>

<style scoped lang="scss">
@use "@/variables.scss" as *;

.dropdown-content {
  .title {
    padding: var(--theme-padding);
    @include h1-header-text();
  }

  .subtitle {
    padding: var(--theme-padding);
    @include h2-header-text();
  }

  .items-container {
    display: flex;
    flex-flow: row;
    gap: var(--theme-padding);
    padding: 0 var(--theme-padding) var(--theme-padding) var(--theme-padding);

    :deep(.dx-icon) {
      color: var(--icon-color);
    }
  }
}
</style>
