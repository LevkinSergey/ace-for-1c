ace.define("ace/mode/bsl_query_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../lib/oop");
  var TextHighlightRules = requireFunction("./text_highlight_rules").TextHighlightRules;

  var SqlHighlightRules = function () {
    var keywords =
      "ВЫБРАТЬ|РАЗРЕШЕННЫЕ|РАЗЛИЧНЫЕ|ПЕРВЫЕ|КАК|ПУСТАЯТАБЛИЦА|ПОМЕСТИТЬ|ИЗ|ВНУТРЕННЕЕ|ЛЕВОЕ|ВНЕШНЕЕ|ПРАВОЕ|ПОЛНОЕ|СОЕДИНЕНИЕ|ГДЕ|" +
      "СГРУППИРОВАТЬ|ПО|ИМЕЮЩИЕ|ОБЪЕДИНИТЬ|ВСЕ|УПОРЯДОЧИТЬ|АВТОУПОРЯДОЧИВАНИЕ|ИТОГИ|ОБЩИЕ|ТОЛЬКО|ИЕРАРХИЯ|ПЕРИОДАМИ|ДЛЯ|ИЗМЕНЕНИЯ|SELECT|ALLOWED|DISTINCT|TOP|" +
      "AS|EMPTYTABLE|INTO|FROM|INNER|LEFT|OUTER|RIGHT|FULL|JOIN|ON" +
      "WHERE|GROUP|BY|HAVING|UNION|ALL|ORDER|AUTOORDER|TOTALS|OVERALL|ONLY|HIERARCHY|СГРУППИРОВАНОПО|" +
      "GROUPEDBY|БУЛЕВО|BOOLEAN|ВОЗР|ASC|ЗНАЧЕНИЕ|VALUE|ИНДЕКСИРОВАТЬ|INDEX|ТИП|TYPE|ТИПЗНАЧЕНИЯ|" +
      "VALUETYPE|УБЫВ|DESC|УНИЧТОЖИТЬ|DROP|ГРУППИРУЮЩИМ|НАБОРАМ|GROUPING|SETS";

    var builtinConstants = "ИСТИНА|ЛОЖЬ|TRUE|FALSE";

    var builtinFunctions =
      "АВТОНОМЕРЗАПИСИ|RECORDAUTONUMBER|В|IN|ВЫБОР|CASE|ВЫРАЗИТЬ|CAST|ГОД|YEAR|ДАТА|DATE|ДАТАВРЕМЯ|DATETIME|" +
      "ДЕКАДА|TENDAYS|ДЕНЬ|DAY|ДЕНЬГОДА|DAYOFYEAR|ДЕНЬНЕДЕЛИ|WEEKDAY|ДОБАВИТЬКДАТЕ|DATEADD|ЕСТЬ|IS|" +
      "ЕСТЬNULL|ISNULL|И|AND|ИЕРАРХИИ|HIERARCHY|ИЛИ|OR|ИНАЧЕ|ELSE|ИСТИНА|TRUE|КВАРТАЛ|QUARTER|" +
      "КОЛИЧЕСТВО|COUNT|КОНЕЦПЕРИОДА|ENDOFPERIOD|КОНЕЦ|END|ЛОЖЬ|FALSE|МАКСИМУМ|MAX|МЕЖДУ|BETWEEN|" +
      "МЕСЯЦ|MONTH|МИНИМУМ|MIN|МИНУТА|MINUTE|НАЧАЛОПЕРИОДА|BEGINOFPERIOD|НЕ|NOT|НЕДЕЛЯ|WEEK|" +
      "НЕОПРЕДЕЛЕНО|UNDEFINED|ПОДОБНО|LIKE|ПОДСТРОКА|SUBSTRING|ПОЛУГОДИЕ|HALFYEAR|ПРЕДСТАВЛЕНИЕ|PRESENTATION|" +
      "ПРЕДСТАВЛЕНИЕССЫЛКИ|REFPRESENTATION|РАЗНОСТЬДАТ|DATEDIFF|СЕКУНДА|SECOND|СПЕЦСИМВОЛ|ESCAPE|СРЕДНЕЕ|AVG|ССЫЛКА|REFS|" +
      "СТРОКА|STRING|СУММА|SUM|ТОГДА|THEN|УБЫВ|DESC|ЧАС|HOUR|ЧИСЛО|NUMBER|NULL|КОГДА|WHEN|СОКРЛП|TRIMALL|" +
      "СОКРП|TRIMAR|СОКРЛ|TRIMAL|ACOS|ASIN|ATAN|COS|EXP|LOG|LOG10|SIN|SQRT|POW|TAN|ОКР|ROUND|ЦЕЛ|INT|ДЛИНАСТРОКИ|STRINGLENGTH|" +
      "ЛЕВ|LEFT|ПРАВ|RIGHT|СТРНАЙТИ|STRFIND|ВРЕГ|UPPER|НРЕГ|LOWER|СТРЗАМЕНИТЬ|STRREPLACE|РАЗМЕРХРАНИМЫХДАННЫХ|STOREDDATASIZE";

    var dataTypes =
      "СТРОКА|ЧИСЛО|БУЛЕВО|ДАТА|STRING|BOOLEAN|NUMBER|DATE";

    var keywordMapper = this.createKeywordMapper(
      {
        "support.function": builtinFunctions,
        keyword: keywords,
        "constant.language": builtinConstants,
        "storage.type": dataTypes,
      },
      "identifier",
      true
    );

    this.$rules = {
      start: [
        {
          token: "comment",
          regex: "//.*",
        },
        {
          token: "string", // " string
          regex: '".*?"',
        },
        {
          token: "string", // ' string
          regex: "'.*?'",
        },
        {
          token: "string", // ` string (apache drill)
          regex: "`.*?`",
        },
        {
          token: "constant.numeric", // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b",
        },
        {
          token: keywordMapper,
          regex: "[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*",
          caseInsensitive: true,
        },
        {
          token: "keyword.operator",
          regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|=",
        },
        {
          token: "paren.lparen",
          regex: "[\\(]",
        },
        {
          token: "paren.rparen",
          regex: "[\\)]",
        },
        {
          token: "text",
          regex: "\\s+",
        },
      ],
    };
    this.normalizeRules();
  };

  oop.inherits(SqlHighlightRules, TextHighlightRules);

  exports.SqlHighlightRules = SqlHighlightRules;
});

ace.define("ace/mode/folding/cstyle", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/range",
  "ace/mode/folding/fold_mode",
], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../../lib/oop");
  var Range = requireFunction("../../range").Range;
  var BaseFoldMode = requireFunction("./fold_mode").FoldMode;

  var FoldMode = (exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(
        this.foldingStartMarker.source.replace(
          /\|[^|]*?$/,
          "|" + commentRegex.start
        )
      );
      this.foldingStopMarker = new RegExp(
        this.foldingStopMarker.source.replace(
          /\|[^|]*?$/,
          "|" + commentRegex.end
        )
      );
    }
  });
  oop.inherits(FoldMode, BaseFoldMode);

  (function () {
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);

      if (this.singleLineBlockCommentRe.test(line)) {
        if (
          !this.startRegionRe.test(line) &&
          !this.tripleStarBlockCommentRe.test(line)
        )
          return "";
      }

      var fw = this._getFoldWidgetBase(session, foldStyle, row);

      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };

    this.getFoldWidgetRange = function (
      session,
      foldStyle,
      row,
      forceMultiline
    ) {
      var line = session.getLine(row);

      if (this.startRegionRe.test(line))
        return this.getCommentRegionBlock(session, line, row);

      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;

        if (match[1])
          return this.openingBracketBlock(session, match[1], row, i);

        var range = session.getCommentFoldRange(row, i + match[0].length, 1);

        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }

        return range;
      }

      if (foldStyle === "markbegin") return;

      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;

        if (match[1])
          return this.closingBracketBlock(session, match[1], row, i);

        return session.getCommentFoldRange(row, i, -1);
      }
    };

    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);

        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }

      return new Range(
        startRow,
        startColumn,
        endRow,
        session.getLine(endRow).length
      );
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;

      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;
        else depth++;

        if (!depth) break;
      }

      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }.call(FoldMode.prototype));
});

ace.define("ace/mode/folding/bsl_query", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/folding/cstyle",
], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../../lib/oop");
  var BaseFoldMode = requireFunction("./cstyle").FoldMode;

  var FoldMode = (exports.FoldMode = function () { });

  oop.inherits(FoldMode, BaseFoldMode);

  (function () { }.call(FoldMode.prototype));
});

ace.define("ace/mode/bsl_query", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/bsl_query_highlight_rules",
  "ace/mode/folding/bsl_query",
], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../lib/oop");
  var TextMode = requireFunction("./text").Mode;
  var SqlHighlightRules =
    requireFunction("./bsl_query_highlight_rules").SqlHighlightRules;
  var SqlFoldMode = requireFunction("./folding/bsl_query").FoldMode;

  var Mode = function () {
    this.HighlightRules = SqlHighlightRules;
    this.foldingRules = new SqlFoldMode();
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);

  (function () {
    this.lineCommentStart = "//";
    this.blockComment = { start: "/*", end: "*/" };

    this.$id = "ace/mode/bsl_query";
    this.snippetFileId = "ace/snippets/bsl_query";
  }.call(Mode.prototype));

  exports.Mode = Mode;
});
(function () {
  ace.require(["ace/mode/bsl_query"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
