<template>
  <div class="tab-box">
    <div class="tab-item active">TAB 1</div>
     <div class="tab-item">TAB 2</div>
     <div class="tab-item">TAB 3</div>
     <div class="tab-item">TAB 4</div> 
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
} 
.tab-box {
  display: flex;
  align-items: center;
  width: 400px;
  background-color: #e44f26;
  border: 1px solid #ccc;
  .tab-item {
    position: relative;
    flex: 1;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
  }
  .active {
    position: relative;
    border-radius: 20px 20px 0 0;
    background-color: #fff;
    color: #333;
    z-index: 1;
    box-shadow: 20px 20px 0 0 #fff, -20px 20px 0 0 #fff;
    &::before {
      content:'';
      position: absolute;
      left: -21px;
      bottom: 0;
      width: 21px;
      height: 50px;
      background-color: #e44f26;
      border-radius: 0 0 20px 0;
    }
    &::after {
      content: '';
      position: absolute;
      right: -21px;
      bottom: 0; 
      width: 21px;
      height: 50px;
      background-color: #e44f26;
      border-radius: 0 0 0 20px;
    }
  }
}

</style>
