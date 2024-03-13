ace.define("ace/mode/_1c_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../lib/oop");
  var TextHighlightRules = requireFunction("./text_highlight_rules").TextHighlightRules;

  var _1CHighlightRules = function () {

    var keywords = (
      "Процедура|Функция|КонецПроцедуры|КонецФункции|Для|Пока|По|Из|Цикл|КонецЦикла|Если|Тогда|Иначе|ИначеЕсли|КонецЕсли|Попытка|Исключение|КонецПопытки|Каждого|" +
      "Перем|Знач|И|Или|Не|Новый|Прервать|Продолжить|Возврат|Экспорт|Перейти|ВызватьИсключение" +
      "procedure|function|endprocedure|endfunction|for|while|to|do|enddo|if|then|else|elseif|endif|try|catch|endtry|each|" +
      "var|val|and|or|not|new|break|continue|return|export|array|structure|map|rise"
    );
    var builtinConstants = (
      "Неопределено|Undefined|Истина|True|Ложь|False|NULL"
    );
    var builtinFunctions = (
      "СтрДлина|StrLen|СокрЛ|TrimL|СокрП|TrimR|СокрЛП|TrimAll|Лев|Left|Прав|" +
      "Right|Сред|Mid|СтрНайти|StrFind|ВРег|Upper|НРег|Lower|" +
      "ТРег|Title|Символ|Char|КодСимвола|CharCode|ПустаяСтрока|" +
      "IsBlankString|СтрЗаменить|StrReplace|СтрЧислоСтрок|StrLineCount|" +
      "СтрПолучитьСтроку|StrGetLine|СтрЧислоВхождений|StrOccurrenceCount|" +
      "СтрСравнить|StrCompare|СтрНачинаетсяС|StrStartWith|СтрЗаканчиваетсяНа|" +
      "StrEndsWith|СтрРазделить|StrSplit|СтрСоединить|StrConcat|" +
      "ПоказатьВопрос|ShowQueryBox|Вопрос|DoQueryBox|ПоказатьПредупреждение|ShowMessageBox|Предупреждение|DoMessageBox|Сообщить|Message|ОчиститьСообщения|ClearMessages|ОповеститьОбИзменении|NotifyChanged|Состояние|Status|Сигнал|Beep|ПоказатьЗначение|ShowValue|ОткрытьЗначение|OpenValue|Оповестить|Notify|ОбработкаПрерыванияПользователя|UserInterruptProcessing|ОткрытьСодержаниеСправки|OpenHelpContent|ОткрытьИндексСправки|OpenHelpIndex|ОткрытьСправку|OpenHelp|ПоказатьИнформациюОбОшибке|ShowErrorInfo|КраткоеПредставлениеОшибки|BriefErrorDescription|ПодробноеПредставлениеОшибки|DetailErrorDescription|ПолучитьФорму|GetForm|ЗакрытьСправку|CloseHelp|ПоказатьОповещениеПользователя|ShowUserNotification|ОткрытьФорму|OpenForm|ОткрытьФормуМодально|OpenFormModal|АктивноеОкно|ActiveWindow|ВыполнитьОбработкуОповещения|ExecuteNotifyProcessing|" +
      "Новый|New|" +
      "Цел|Int|Окр|Round|ACos|ACos|ASin|ASin|ATan|ATan|Cos|Cos|Exp|Exp|Log|Log|Log10|Log10|Pow|Pow|Sin|Sin|Sqrt|Sqrt|Tan|Tan|" +
      "Год|Year|Месяц|Month|День|Day|Час|Hour|Минута|Minute|Секунда|Second|НачалоГода|BegOfYear|НачалоДня|BegOfDay|НачалоКвартала|BegOfQuarter|НачалоМесяца|BegOfMonth|НачалоМинуты|BegOfMinute|НачалоНедели|BegOfWeek|НачалоЧаса|BegOfHour|КонецГода|EndOfYear|КонецДня|EndOfDay|КонецКвартала|" + "EndOfQuarter|КонецМесяца|EndOfMonth|КонецМинуты|EndOfMinute|КонецНедели|EndOfWeek|КонецЧаса|EndOfHour|НеделяГода|WeekOfYear|ДеньГода|DayOfYear|ДеньНедели|WeekDay|ТекущаяДата|CurrentDate|ДобавитьМесяц|AddMonth|" +
      "ПолучитьЗаголовокСистемы|GetCaption|ПолучитьСкоростьКлиентскогоСоединения|GetClientConnectionSpeed|ПодключитьОбработчикОжидания|AttachIdleHandler|УстановитьЗаголовокСистемы|SetCaption|ОтключитьОбработчикОжидания|DetachIdleHandler|ИмяКомпьютера|ComputerName|ЗавершитьРаботуСистемы|Exit|ИмяПользователя|UserName|ПрекратитьРаботуСистемы|Terminate|ПолноеИмяПользователя|UserFullName|ЗаблокироватьРаботуПользователя|LockApplication|КаталогПрограммы|BinDir|КаталогВременныхФайлов|TempFilesDir|ПравоДоступа|AccessRight|РольДоступна|IsInRole|ТекущийЯзык|CurrentLanguage|ТекущийКодЛокализации|CurrentLocaleCode|СтрокаСоединенияИнформационнойБазы|InfoBaseConnectionString|ПодключитьОбработчикОповещения|AttachNotificationHandler|ОтключитьОбработчикОповещения|DetachNotificationHandler|ПолучитьСообщенияПользователю|GetUserMessages|ПараметрыДоступа|AccessParameters|ПредставлениеПриложения|ApplicationPresentation|ТекущийЯзыкСистемы|CurrentSystemLanguage|ЗапуститьСистему|RunSystem|ТекущийРежимЗапуска|CurrentRunMode|УстановитьЧасовойПоясСеанса|SetSessionTimeZone|ЧасовойПоясСеанса|SessionTimeZone|ТекущаяДатаСеанса|CurrentSessionDate|УстановитьКраткийЗаголовокПриложения|SetShortApplicationCaption|ПолучитьКраткийЗаголовокПриложения|GetShortApplicationCaption|ПредставлениеПрава|RightPresentation|ВыполнитьПроверкуПравДоступа|VerifyAccessRights|РабочийКаталогДанныхПользователя|UserDataWorkDir|КаталогДокументов|DocumentsDir|ПолучитьИнформациюЭкрановКлиента|GetClientDisplaysInformation|ТекущийВариантОсновногоШрифтаКлиентскогоПриложения|ClientApplicationBaseFontCurrentVariant|ТекущийВариантИнтерфейсаКлиентскогоПриложения|ClientApplicationInterfaceCurrentVariant|УстановитьЗаголовокКлиентскогоПриложения|SetClientApplicationCaption|ПолучитьЗаголовокКлиентскогоПриложения|GetClientApplicationCaption|НачатьПолучениеКаталогаВременныхФайлов|BeginGettingTempFilesDir|НачатьПолучениеКаталогаДокументов|BeginGettingDocumentsDir|" + "НачатьПолучениеРабочегоКаталогаДанныхПользователя|BeginGettingUserDataWorkDir|ПодключитьОбработчикЗапросаНастроекКлиентаЛицензирования|AttachLicensingClientParametersRequestHandler|ОтключитьОбработчикЗапросаНастроекКлиентаЛицензирования|DetachLicensingClientParametersRequestHandler|" +
      "Тип|Type|ТипЗнч|TypeOf|" +
      "Булево|Boolean|Число|Number|Строка|String|Дата|Date|" +
      "ПоказатьВводЗначения|ShowInputValue|ВвестиЗначение|InputValue|ПоказатьВводЧисла|ShowInputNumber|ВвестиЧисло|InputNumber|ПоказатьВводСтроки|ShowInputString|ВвестиСтроку|InputString|ПоказатьВводДаты|ShowInputDate|ВвестиДату|InputDate|" +
      "Формат|Format|ЧислоПрописью|NumberInWords|НСтр|NStr|ПредставлениеПериода|PeriodPresentation|СтрШаблон|StrTemplate|" +
      "ПолучитьОбщийМакет|GetCommonTemplate|ПолучитьОбщуюФорму|GetCommonForm|ПредопределенноеЗначение|PredefinedValue|ПолучитьПолноеИмяПредопределенногоЗначения|GetPredefinedValueFullName|" +
      "ЗначениеВСтрокуВнутр|ValueToStringInternal|ЗначениеИзСтрокиВнутр|ValueFromStringInternal|ЗначениеВФайл|ValueToFile|ЗначениеИзФайла|ValueFromFile|" +
      "КомандаСистемы|System|ЗапуститьПриложение|RunApp|ПолучитьCOMОбъект|GetCOMObject|ПользователиОС|OSUsers|НачатьЗапускПриложения|BeginRunningApplication|" +
      "ПодключитьВнешнююКомпоненту|AttachAddIn|НачатьУстановкуВнешнейКомпоненты|BeginInstallAddIn|УстановитьВнешнююКомпоненту|InstallAddIn|НачатьПодключениеВнешнейКомпоненты|BeginAttachingAddIn|" +
      "КопироватьФайл|FileCopy|ПереместитьФайл|MoveFile|УдалитьФайлы|DeleteFiles|НайтиФайлы|FindFiles|СоздатьКаталог|CreateDirectory|ПолучитьИмяВременногоФайла|GetTempFileName|РазделитьФайл|SplitFile|ОбъединитьФайлы|MergeFiles|ПолучитьФайл|GetFile|НачатьПомещениеФайла|BeginPutFile|ПоместитьФайл|PutFile|ЭтоАдресВременногоХранилища|IsTempStorageURL|УдалитьИзВременногоХранилища|DeleteFromTempStorage|ПолучитьИзВременногоХранилища|GetFromTempStorage|ПоместитьВоВременноеХранилище|PutToTempStorage|ПодключитьРасширениеРаботыСФайлами|AttachFileSystemExtension|НачатьУстановкуРасширенияРаботыСФайлами|BeginInstallFileSystemExtension|УстановитьРасширениеРаботыСФайлами|InstallFileSystemExtension|ПолучитьФайлы|GetFiles|ПоместитьФайлы|PutFiles|ЗапроситьРазрешениеПользователя|RequestUserPermission|ПолучитьМаскуВсеФайлы|GetAllFilesMask|ПолучитьМаскуВсеФайлыКлиента|GetClientAllFilesMask|ПолучитьМаскуВсеФайлыСервера|GetServerAllFilesMask|ПолучитьРазделительПути|GetPathSeparator|ПолучитьРазделительПутиКлиента|GetClientPathSeparator|ПолучитьРазделительПутиСервера|GetServerPathSeparator|НачатьПодключениеРасширенияРаботыСФайлами|BeginAttachingFileSystemExtension|НачатьЗапросРазрешенияПользователя|BeginRequestingUserPermission|НачатьПоискФайлов|BeginFindingFiles|НачатьСозданиеКаталога|BeginCreatingDirectory|НачатьКопированиеФайла|BeginCopyingFile|НачатьПеремещениеФайла|BeginMovingFile|НачатьУдалениеФайлов|BeginDeletingFiles|НачатьПолучениеФайлов|BeginGettingFiles|НачатьПомещениеФайлов|BeginPuttingFiles|" +
      "НачатьТранзакцию|BeginTransaction|ЗафиксироватьТранзакцию|CommitTransaction|ОтменитьТранзакцию|RollbackTransaction|УстановитьМонопольныйРежим|SetExclusiveMode|МонопольныйРежим|ExclusiveMode|ПолучитьОперативнуюОтметкуВремени|GetRealTimeTimestamp|ПолучитьСоединенияИнформационнойБазы|GetInfoBaseConnections|НомерСоединенияИнформационнойБазы|InfoBaseConnectionNumber|КонфигурацияИзменена|ConfigurationChanged|КонфигурацияБазыДанныхИзмененаДинамически|DataBaseConfigurationChangedDynamically|УстановитьВремяОжиданияБлокировкиДанных|SetLockWaitTime|ОбновитьНумерациюОбъектов|RefreshObjectsNumbering|ПолучитьВремяОжиданияБлокировкиДанных|GetLockWaitTime|КодЛокализацииИнформационнойБазы|InfoBaseLocaleCode|УстановитьМинимальнуюДлинуПаролейПользователей|SetUserPasswordMinLength|ПолучитьМинимальнуюДлинуПаролейПользователей|GetUserPasswordMinLength|ИнициализироватьПредопределенныеДанные|InitializePredefinedData|УдалитьДанныеИнформационнойБазы|EraseInfoBaseData|УстановитьПроверкуСложностиПаролейПользователей|SetUserPasswordStrengthCheck|ПолучитьПроверкуСложностиПаролейПользователей|GetUserPasswordStrengthCheck|ПолучитьСтруктуруХраненияБазыДанных|GetDBStorageStructureInfo|УстановитьПривилегированныйРежим|SetPrivilegedMode|ПривилегированныйРежим|PrivilegedMode|ТранзакцияАктивна|TransactionActive|НеобходимостьЗавершенияСоединения|ConnectionStopRequest|НомерСеансаИнформационнойБазы|InfoBaseSessionNumber|ПолучитьСеансыИнформационнойБазы|GetInfoBaseSessions|ЗаблокироватьДанныеДляРедактирования|LockDataForEdit|УстановитьСоединениеСВнешнимИсточникомДанных|ConnectExternalDataSource|РазблокироватьДанныеДляРедактирования|UnlockDataForEdit|РазорватьСоединениеСВнешнимИсточникомДанных|DisconnectExternalDataSource|ПолучитьБлокировкуСеансов|GetSessionsLock|УстановитьБлокировкуСеансов|SetSessionsLock|ОбновитьПовторноИспользуемыеЗначения|RefreshReusableValues|УстановитьБезопасныйРежим|SetSafeMode|БезопасныйРежим|SafeMode|ПолучитьДанныеВыбора|GetChoiceData|УстановитьЧасовойПоясИнформационнойБазы|SetInfoBaseTimeZone|ПолучитьЧасовойПоясИнформационнойБазы|GetInfoBaseTimeZone|ПолучитьОбновлениеКонфигурацииБазыДанных|GetDataBaseConfigurationUpdate|УстановитьБезопасныйРежимРазделенияДанных|SetDataSeparationSafeMode|БезопасныйРежимРазделенияДанных|DataSeparationSafeMode|УстановитьВремяЗасыпанияПассивногоСеанса|SetPassiveSessionHibernateTime|ПолучитьВремяЗасыпанияПассивногоСеанса|GetPassiveSessionHibernateTime|УстановитьВремяЗавершенияСпящегоСеанса|SetHibernateSessionTerminateTime|ПолучитьВремяЗавершенияСпящегоСеанса|GetHibernateSessionTerminateTime|ПолучитьТекущийСеансИнформационнойБазы|GetCurrentInfoBaseSession|ПолучитьИдентификаторКонфигурации|GetConfigurationID|УстановитьНастройкиКлиентаЛицензирования|SetLicensingClientParameters|ПолучитьИмяКлиентаЛицензирования|GetLicensingClientName|ПолучитьДополнительныйПараметрКлиентаЛицензирования|GetLicensingClientAdditionalParameter|" +
      "НайтиПомеченныеНаУдаление|FindMarkedForDeletion|НайтиПоСсылкам|FindByRef|УдалитьОбъекты|DeleteObjects|УстановитьОбновлениеПредопределенныхДанныхИнформационнойБазы|SetInfoBasePredefinedDataUpdate|ПолучитьОбновлениеПредопределенныхДанныхИнформационнойБазы|GetInfoBasePredefinedData|" +
      "XMLСтрока|XMLString|XMLЗначение|XMLValue|XMLТип|XMLType|XMLТипЗнч|XMLTypeOf|ИзXMLТипа|FromXMLType|ВозможностьЧтенияXML|CanReadXML|ПолучитьXMLТип|GetXMLType|ПрочитатьXML|ReadXML|ЗаписатьXML|WriteXML|НайтиНедопустимыеСимволыXML|FindDisallowedXMLCharacters|ИмпортМоделиXDTO|ImportXDTOModel|СоздатьФабрикуXDTO|CreateXDTOFactory|" +
      "ЗаписатьJSON|WriteJSON|ПрочитатьJSON|ReadJSON|ПрочитатьДатуJSON|ReadJSONDate|ЗаписатьДатуJSON|WriteJSONDate|" +
      "ЗаписьЖурналаРегистрации|WriteLogEvent|ПолучитьИспользованиеЖурналаРегистрации|GetEventLogUsing|УстановитьИспользованиеЖурналаРегистрации|SetEventLogUsing|ПредставлениеСобытияЖурналаРегистрации|EventLogEventPresentation|ВыгрузитьЖурналРегистрации|UnloadEventLog|ПолучитьЗначенияОтбораЖурналаРегистрации|GetEventLogFilterValues|УстановитьИспользованиеСобытияЖурналаРегистрации|SetEventLogEventUse|ПолучитьИспользованиеСобытияЖурналаРегистрации|GetEventLogEventUse|СкопироватьЖурналРегистрации|CopyEventLog|ОчиститьЖурналРегистрации|ClearEventLog|" +
      "ЗначениеВДанныеФормы|ValueToFormData|ДанныеФормыВЗначение|FormDataToValue|КопироватьДанныеФормы|CopyFormData|УстановитьСоответствиеОбъектаИФормы|SetObjectAndFormConformity|ПолучитьСоответствиеОбъектаИФормы|GetObjectAndFormConformity|" +
      "ПолучитьФункциональнуюОпцию|GetFunctionalOption|ПолучитьФункциональнуюОпциюИнтерфейса|GetInterfaceFunctionalOption|УстановитьПараметрыФункциональныхОпцийИнтерфейса|SetInterfaceFunctionalOptionParameters|ПолучитьПараметрыФункциональныхОпцийИнтерфейса|GetInterfaceFunctionalOptionParameters|ОбновитьИнтерфейс|RefreshInterface|" +
      "УстановитьРасширениеРаботыСКриптографией|InstallCryptoExtension|НачатьУстановкуРасширенияРаботыСКриптографией|BeginInstallCryptoExtension|ПодключитьРасширениеРаботыСКриптографией|AttachCryptoExtension|НачатьПодключениеРасширенияРаботыСКриптографией|BeginAttachingCryptoExtension|" +
      "УстановитьСоставСтандартногоИнтерфейсаOData|SetStandardODataInterfaceContent|ПолучитьСоставСтандартногоИнтерфейсаOData|GetStandardODataInterfaceContent|" +
      "Мин|Min|Макс|Max|ОписаниеОшибки|ErrorDescription|Вычислить|Eval|ИнформацияОбОшибке|ErrorInfo|Base64Значение|Base64Value|Base64Строка|Base64String|ЗаполнитьЗначенияСвойств|FillPropertyValues|ЗначениеЗаполнено|ValueIsFilled|ПолучитьПредставленияНавигационныхСсылок|GetURLsPresentations|НайтиОкноПоНавигационнойСсылке|FindWindowByURL|ПолучитьОкна|GetWindows|ПерейтиПоНавигационнойСсылке|GotoURL|ПолучитьНавигационнуюСсылку|GetURL|ПолучитьДопустимыеКодыЛокализации|GetAvailableLocaleCodes|ПолучитьНавигационнуюСсылкуИнформационнойБазы|GetInfoBaseURL|ПредставлениеКодаЛокализации|LocaleCodePresentation|ПолучитьДопустимыеЧасовыеПояса|GetAvailableTimeZones|ПредставлениеЧасовогоПояса|TimeZonePresentation|ТекущаяУниверсальнаяДата|CurrentUniversalDate|ТекущаяУниверсальнаяДатаВМиллисекундах|CurrentUniversalDateInMilliseconds|МестноеВремя|ToLocalTime|УниверсальноеВремя|ToUniversalTime|ЧасовойПояс|TimeZone|СмещениеЛетнегоВремени|DaylightTimeOffset|СмещениеСтандартногоВремени|StandardTimeOffset|КодироватьСтроку|EncodeString|РаскодироватьСтроку|DecodeString|Найти|Find|" +
      "ПередНачаломРаботыСистемы|BeforeStart|ПриНачалеРаботыСистемы|OnStart|ПередЗавершениемРаботыСистемы|BeforeExit|ПриЗавершенииРаботыСистемы|OnExit|ОбработкаВнешнегоСобытия|ExternEventProcessing|УстановкаПараметровСеанса|SessionParametersSetting|ПриИзмененииПараметровЭкрана|OnChangeDisplaySettings|"
    );
    var dataTypes = (
      "константы|справочники|документы|журналыдокументов|перечисления|регистрысведений|регистрынакопления|отчеты|обработки" +
      "планывидовхарактеристик|планыобмена|параметрысеанса|роли|общиереквизиты|общиеформы|общиемакеты|критерииотбора" +
      "Запрос, ЗаписьJSON"
    );

    var supportClass = (
      "WSСсылки|WSReferences|БиблиотекаКартинок|PictureLib|БиблиотекаМакетовОформленияКомпоновкиДанных|DataCompositionAppearanceTemplateLib|БиблиотекаСтилей|StyleLib|БизнесПроцессы|BusinessProcesses|ВнешниеИсточникиДанных|ExternalDataSources|ВнешниеОбработки|ExternalDataProcessors|ВнешниеОтчеты|ExternalReports|Документы|Documents|ДоставляемыеУведомления|DeliverableNotifications|ЖурналыДокументов|DocumentJournals|Задачи|Tasks|ИспользованиеРабочейДаты|WorkingDateUse|ИсторияРаботыПользователя|UserWorkHistory|Константы|Constants|КритерииОтбора|FilterCriteria|Метаданные|Metadata|Обработки|DataProcessors|ОтправкаДоставляемыхУведомлений|DeliverableNotificationSend|Отчеты|Reports|ПараметрыСеанса|SessionParameters|Перечисления|Enums|ПланыВидовРасчета|ChartsOfCalculationTypes|ПланыВидовХарактеристик|ChartsOfCharacteristicTypes|ПланыОбмена|ExchangePlans|ПланыСчетов|ChartsOfAccounts|ПолнотекстовыйПоиск|FullTextSearch|ПользователиИнформационнойБазы|InfoBaseUsers|Последовательности|Sequences|РасширенияКонфигурации|ConfigurationExtensions|РегистрыБухгалтерии|AccountingRegisters|РегистрыНакопления|AccumulationRegisters|РегистрыРасчета|CalculationRegisters|РегистрыСведений|InformationRegisters|РегламентныеЗадания|ScheduledJobs|СериализаторXDTO|XDTOSerializer|Справочники|Catalogs|СредстваГеопозиционирования|LocationTools|СредстваКриптографии|CryptoToolsManager|СредстваМультимедиа|MultimediaTools|СредстваПочты|MailTools|СредстваТелефонии|TelephonyTools|ФабрикаXDTO|XDTOFactory|ФоновыеЗадания|BackgroundJobs|ХранилищаНастроек|SettingsStorages|ВстроенныеПокупки|InAppPurchases|ОтображениеРекламы|AdRepresentationПанельЗадачОС|OSTaskbar|ПроверкаВстроенныхПокупок|InAppPurchasesValidation"
    );

    var variableLanguage = (
      "ГлавныйИнтерфейс|MainInterface|ГлавныйСтиль|MainStyle|ПараметрЗапуска|LaunchParameter|РабочаяДата|WorkingDate|ХранилищеВариантовОтчетов|ReportsVariantsStorage|ХранилищеНастроекДанныхФорм|FormDataSettingsStorage|ХранилищеОбщихНастроек|CommonSettingsStorage|ХранилищеПользовательскихНастроекДинамическихСписков|DynamicListsUserSettingsStorage|ХранилищеПользовательскихНастроекОтчетов|ReportsUserSettingsStorage|ХранилищеСистемныхНастроек|SystemSettingsStorage"
    );


    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "support.class": supportClass,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "types": dataTypes,
      "variable.language": variableLanguage
    }, "identifier");


    this.$rules = {
      "start": [{
        token: "comment",
        regex: "\/\/.*"
      },
      {
        token: "preprocessor.region",
        regex: "(^[ \t]*#(?:Область|КонецОбласти).*$)"
      },
      {
        token: "preprocessor.anotation",
        regex: "(^[ \t]*&.*$)"
      },
      {
        token: "preprocessor.instruction",
        regex: /#(?:Если|If|ИначеЕсли|ElsIf|Иначе|Else|КонецЕсли|EndIf).*(?:Тогда|Then)?/,
        caseInsensitive: true
      },
      {
        token: keywordMapper,
        regex: "[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*",
        caseInsensitive: true
      },
      {
        token: "label",
        regex: "~(\u0020|\t)*[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*(\u0020|\t)*:"
      },
      {
        token: "identifier", // ' identifier
        regex: "[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*"
      },
      {
        token: "doubleoperator", // ' doubleoperator
        regex: "<=|<>|>="
      },
      {
        token: "singleoperator", // ' singleoperator
        regex: "[\\+\\-\\*/%&<>=\?]"
      },
      {
        token: "number", // ' number
        regex: /\b(?:[\da-fA-F]{8}-(?:[\da-fA-F]{4}-){3}[\da-fA-F]{12}|\d+\.?\d*)\b/
      },
      {
        token: "paren.lparen",
        regex: "[\\(]"
      },
      {
        token: "paren.rparen",
        regex: "[\\)]"
      },
      {
        token: "paren.lsqare",
        regex: "[\\[]"
      },
      {
        token: "paren.rsqare",
        regex: "[\\]]"
      },
      {
        token: "paren.semicolon",
        regex: "[\\;]"
      },
      {
        token: "paren.comma",
        regex: "[\\,]"
      },
      {
        token: "string.quoted.double.bsl",
        regex: /\"/,
        push: [{
          token: "string.quoted.double.bsl",
          regex: /\"(?![\"])/,
          next: "pop"
        }, {
          include: "#query"
        }, {
          token: "constant.character.escape.bsl",
          regex: /\"\"/
        }, {
          token: "comment.line.double-slash.bsl",
          regex: /^\s*\/\/.*$/
        }, {
          defaultToken: "string.quoted.double.bsl"
        }]
      }

      ],
      "#query": [{
        token: "keyword.control.sdbl",
        regex: /\b(?:Выбрать|Select(?:\s+Разрешенные|Allowed)?(?:\s+Различные|Distinct)?(?:\s+Первые|Top)?)\b/,
        caseInsensitive: true,
        push: [{
          token: "text",
          regex: /(?=\"[^\"])/,
          next: "pop"
        }, {
          token: "comment.line.double-slash.bsl",
          regex: /^\s*\/\//,
          push: [{
            token: "comment.line.double-slash.bsl",
            regex: /$/,
            next: "pop"
          }, {
            defaultToken: "comment.line.double-slash.bsl"
          }]
        }, {
          token: "comment.line.double-slash.sdbl",
          regex: /\/\/(?:\"\"|[^\"])*/
        }, {
          token: "string.quoted.double.sdbl",
          regex: /\"\"[^"]*\"\"/
        }, {
          include: "source.sdbl"
        }]
      }]
    };
    this.normalizeRules();
  };

  oop.inherits(_1CHighlightRules, TextHighlightRules);

  exports._1CHighlightRules = _1CHighlightRules;
});

ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../../lib/oop");
  var Range = requireFunction("../../range").Range;
  var BaseFoldMode = requireFunction("./fold_mode").FoldMode;

  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(
        this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
      );
      this.foldingStopMarker = new RegExp(
        this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
      );
    }
  };
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
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
          return "";
      }

      var fw = this._getFoldWidgetBase(session, foldStyle, row);

      if (!fw && this.startRegionRe.test(line))
        return "start"; // lineCommentRegionStart

      return fw;
    };

    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
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
          } else if (foldStyle != "all")
            range = null;
        }

        return range;
      }

      if (foldStyle === "markbegin")
        return;

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
        if (indent === -1)
          continue;
        if (startIndent > indent)
          break;
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

      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
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

  }).call(FoldMode.prototype);

});

ace.define("ace/mode/folding/1c", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../../lib/oop");
  var Range = requireFunction("../../range").Range;
  var CFoldMode = requireFunction("./cstyle").FoldMode;

  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(
        this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
      );
      this.foldingStopMarker = new RegExp(
        this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
      );
    }
  };
  oop.inherits(FoldMode, CFoldMode);

  (function () {

    this.blocks = [
      {
        start: /^\s*процедура|procedure\s*/i,
        end: /^\s*конецпроцедуры|endprocedure\s*/i
      },
      {
        start: /^\s*функция|function\s*/i,
        end: /^\s*конецфункции|endfunction\s*/i
      },
      {
        start: /(^[ \t]*#(?:Область).*$)/i,
        end: /(^[ \t]*#(?:КонецОбласти).*$)/i
      },
      {
        start: /#(?:Если|If|ИначеЕсли|ElsIf|Иначе|Else).*(?:Тогда|Then)?/i,
        end: /#(?:КонецЕсли|EndIf).*$/i
      },
      {
        start: /^[ \t]*(?:Если|If|ИначеЕсли|ElsIf|Иначе|Else).*$/i,
        end: /(?:КонецЕсли|EndIf).*$/i
      },
      {
        start: /^[ \t]*(?:Для|For|Пока|while).*(?:Цикл|do)?/i,
        end: /(?:КонецЦикла|enddo).*$/i
      },
      {
        start: /^[ \t]*(?:Попытка|Исключение|try|catch).*(?:Цикл|do)?/i,
        end: /(?:КонецПопытки|endtry).*$/i
      }
    ];

    this.getFoldWidgetRangeBase = this.getFoldWidgetRange;
    this.getFoldWidgetBase = this.getFoldWidget;

    this.getFoldWidget = function (session, foldStyle, row) {
      var fw = this.getFoldWidgetBase(session, foldStyle, row);
      if (!fw) {
        var line = session.getLine(row);
        for (var index = 0; index < this.blocks.length; index++) {
          var element = this.blocks[index];
          if (element.start.test(line)) {
            return "start";
          }
        }
      }
      return fw;
    };

    this.getFoldWidgetRange = function (session, foldStyle, row) {
      var range = this.getFoldWidgetRangeBase(session, foldStyle, row);
      if (range)
        return range;

      var line = session.getLine(row);

      for (var index = 0; index < this.blocks.length; index++) {
        var element = this.blocks[index];
        if (element.start.test(line)) {
          return this.getMyStatementBlock(session, line, row, element.start, element.end);
        }
      }

    };

    this.getMyStatementBlock = function (session, lineParam, row, startRegEx, endRegEx) {

      var maxRow = session.getLength();
      var startRow = row;
      var endRow = row;

      var cLine = session.getLine(row);
      var startColumn = cLine.length;
      while (++row < maxRow) {
        var line = session.getLine(row);
        if (endRegEx.test(line))
          break;
        endRow = row + 1;
      }
      if (endRow > startRow) {
        var endColumn = session.getLine(endRow).length;
        return new Range(startRow, startColumn, endRow, endColumn);
      }
    };



  }).call(FoldMode.prototype);

});

ace.define("ace/mode/_1c", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/_1c_highlight_rules", "ace/mode/folding/1c"], function (requireFunction, exports, module) {
  "use strict";

  var oop = requireFunction("../lib/oop");
  var TextMode = requireFunction("./text").Mode;
  var _1CHighlightRules = requireFunction("./_1c_highlight_rules")._1CHighlightRules;
  var _1CFoldMode = requireFunction("./folding/1c").FoldMode;

  var Mode = function () {
    this.HighlightRules = _1CHighlightRules;
    this.foldingRules = new _1CFoldMode();
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);

  (function () {
    this.lineCommentStart = "//";
    this.$id = "ace/mode/1c";
  }).call(Mode.prototype);

  exports.Mode = Mode;
}); (function () {
  ace.require(["ace/mode/_1c"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
