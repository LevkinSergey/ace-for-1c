ace.define("ace/theme/ones-css", ["require", "exports", "module"], function (require, exports, module) {
  module.exports = `
  .ace-ones {
    background-color: #FFFFFF;
    color: black;
  }

  .ace-ones .ace_storage,
  .ace-ones .ace_keyword,
  .ace-ones .ace_paren,
  .ace-ones .ace_singleoperator,
  .ace-ones .ace_doubleoperator,
  .ace-ones .ace_constant,
  .ace-ones .ace_variable {
    color: red;
  }

  .ace-ones .ace_string {
    color: black;
  }

  .ace-ones .ace_comment {
    color: rgb(0, 128, 0);
  }

  .ace-ones .ace_constant.ace_numeric {
    color: black;
  }

  .ace-ones .ace_preprocessor {
    color: rgb(150, 50, 0);
  }

  .ace-ones .ace_identifier,
  .ace-ones .ace_function {
    color: blue;
  }
  .ace-ones .ace_gutter {
    background: #ebebeb;
    border-right: 1px solid rgb(159, 159, 159);
    color: rgb(136, 136, 136);
  }

  .ace-ones .ace_print-margin {
    width: 1px;
    background: #ebebeb;
  }



  .ace-ones .ace_fold {
      background-color: rgb(60, 76, 114);
  }

  .ace-ones .ace_cursor {
    color: black;
  }



  .ace-ones .ace_constant.ace_buildin {
    color: rgb(88, 72, 246);
  }

  .ace-ones .ace_constant.ace_library {
    color: rgb(6, 150, 14);
  }

  .ace-ones .ace_comment.ace_doc {
    color: rgb(63, 95, 191);
  }

  .ace-ones .ace_comment.ace_doc.ace_tag {
    color: rgb(127, 159, 191);
  }


  .ace-ones .ace_tag {
    color: rgb(25, 118, 116);
  }

  .ace-ones .ace_type {
    color: rgb(127, 0, 127);
  }

  .ace-ones .ace_xml-pe {
    color: rgb(104, 104, 91);
  }

  .ace-ones .ace_marker-layer .ace_selection {
    background: rgb(181, 213, 255);
  }

  .ace-ones .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid rgb(192, 192, 192);
  }

  .ace-ones .ace_meta.ace_tag {
    color:rgb(25, 118, 116);
  }

  .ace-ones .ace_invisible {
    color: #ddd;
  }

  .ace-ones .ace_entity.ace_other.ace_attribute-name {
    color:rgb(127, 0, 127);
  }
  .ace-ones .ace_marker-layer .ace_step {
    background: rgb(255, 255, 0);
  }

  .ace-ones .ace_active-line {
    background: rgb(232, 242, 254);
  }

  .ace-ones .ace_gutter-active-line {
    background-color : #DADADA;
  }

  .ace-ones .ace_marker-layer .ace_selected-word {
    border: 1px solid rgb(181, 213, 255);
  }



  `
});

ace.define("ace/theme/ones", ["require", "exports", "module", "ace/theme/ones-css", "ace/lib/dom"], function (requireFunction, exports, module, trrrrr) {
  "use strict";

  exports.isDark = false;
  exports.cssText = requireFunction("./ones-css");
  exports.cssClass = "ace-ones";


  var dom = requireFunction("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
}); (function () {
  ace.require(["ace/theme/ones"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
