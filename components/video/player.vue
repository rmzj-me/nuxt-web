<template>
  <div class="player">
    <div class="rmzj_player_relative">
      <div class="player_video_wrap"></div>

      <!-- 底部 -->
      <div class="player_video_bottom_area"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.player {
  overflow: hidden;
  position: relative;
  pointer-events: auto;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 0 8px #e5e9ef;
}

.rmzj_player_relative {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.player_video_wrap {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 605px;
  background-color: #000;
}

.player_video_bottom_area {
  position: relative;
  width: 100%;
  height: 46px;
  background-color: #fff;
}
</style>