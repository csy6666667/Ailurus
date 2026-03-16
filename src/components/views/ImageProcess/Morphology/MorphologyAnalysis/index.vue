<template>
  <div class="morphology-panel">
    <section class="panel-section">
      <h3>1. 预处理 (二值化)</h3>
      <div class="control-group">
        <label>阈值: </label>
        <input type="range"  min="0" max="255" />
      </div>
      <div class="control-group inline">
        <label>
          <input type="checkbox" /> 反色 (黑白翻转)
        </label>
      </div>
    </section>

    <hr />

    <section class="panel-section">
      <h3>2. 形态学算子</h3>
      <select  class="styled-select">
        <option value="MORPH_ERODE">腐蚀 (Erosion)</option>
        <option value="MORPH_DILATE">膨胀 (Dilation)</option>
        <option value="MORPH_OPEN">开运算 (Opening)</option>
        <option value="MORPH_CLOSE">闭运算 (Closing)</option>
        <option value="MORPH_GRADIENT">形态学梯度 (Gradient)</option>
        <option value="MORPH_TOPHAT">顶帽 (Top Hat)</option>
        <option value="MORPH_BLACKHAT">黑帽 (Black Hat)</option>
      </select>
    </section>

    <section class="panel-section">
      <h3>3. 内核配置 (Kernel)</h3>
      <div class="control-group">
        <label>形状:</label>
        <select  class="styled-select">
          <option value="MORPH_RECT">矩形</option>
          <option value="MORPH_CROSS">十字形</option>
          <option value="MORPH_ELLIPSE">椭圆形</option>
        </select>
      </div>
      <div class="control-group">
        <label>内核大小: px</label>
        <input 
          type="range" 
          min="3" max="51" step="2" 
        />
      </div>
      <div class="control-group">
        <label>迭代次数: </label>
        <input type="range" min="1" max="10" />
      </div>
    </section>

    <div class="actions">
      <button class="btn-reset">重置</button>
      <button class="btn-apply">应用效果</button>
    </div>
  </div>
</template>