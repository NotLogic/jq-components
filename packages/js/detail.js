;(function ($) {
  /**
   * @description: 详情页两列渲染
   * @param {Object object} params 参数
   * @param {Array<Object>} params。columns 列
   * @param {string} params.leftTextAlign 左侧文字排列方式 left center right
   * @param {string} params.leftClass 左侧额外class,用于覆盖默认样式
   * @param {string} params.rightClass 右侧额外class,用于覆盖默认样式
   * @return: null
   */
  function renderDetail (params) {
    var data = params.data || [];
    var columns = params.columns || [];
    if (!(typeof data === 'object' && !$.isArray(data))) return ''
    if (!$.isArray(columns)) return ''
    var align = params.leftTextAlign || 'left';
    var leftClass = typeof leftClass === 'string' ? leftClass : '';
    var rightClass = typeof rightClass === 'string' ? rightClass : '';
    var html = ''
    for (var i = 0; i < columns.length; i++) {
      var col = columns[i] || {};
      var leftText = col.title || '';
      var left = '<div class="logic_detail_left ' + leftClass + '" style="text-align:' + align + ';">' + leftText + '</div>';
      var rightText = typeof col.render === 'function' ? col.render(data) : (data[col.key] || '');
      var right = '<div class="logic_detail_right ' + rightClass + '">' + rightText + '</div>';
      var item = '<div class="logic_detail_item">' + left + right + '</div>'
      html += item;
    }
    $(this).html(html);
  }
  $.extend({

  })
  $.fn.extend({
    renderDetail: renderDetail
  })
})(jQuery);
