/*
Tawkit app default settings
Here you can set the default settings when app starts 1st time.
---------------------------------------------------------------
إعدادات تطبيق التوقيت الافتراضية
هنا يمكنك تعيين الإعدادات الافتراضية عند بدء التطبيق لأول مرة
----------------------------------------------------------------
*/
let JS_DATA =
{
ucLangNOW			: 'AR',							// اللغة الحالية للتطبيق (العربية)
ucMosqueName		: 'إسم المسجد',                 // اسم المسجد
ucNowCityCODE		: 'SA.MAKKAH',                  // رمز المدينة الحالية (المدينة المنورة)
ucIsMarqueeOn		: 0,                            // تفعيل الشريط المتحرك (0 معطل، 1 مفعل)
ucIsMeteoOn			: 1,                            // تفعيل معلومات الطقس (0 معطل، 1 مفعل)
ucMeteoWithPrayers	: 0,                            // عرض معلومات الطقس مع الصلوات (0 معطل، 1 مفعل)
ucIsForHome			: 0,                            // تطبيق للاستخدام المنزلي (0 للمسجد، 1 للمنزل)
ucUserThemeBG		: 9,                            // رقم الخلفية المختارة (من 0 إلى 39)
ucAddZeroToAMPM		: 0,                            // إضافة صفر للساعات في نظام 12 ساعة (0 معطل، 1 مفعل)
ucHr5BoxesOnly		: 0,                            // عرض 5 مربعات فقط في الشاشة الأفقية (0 معطل، 1 مفعل)
ucDohaScreenSaver	: 0,                            // تفعيل شاشة التوقف بعد صلاة الضحى (0 معطل، 1 مفعل)
ucIshaScreenSaver	: 0,                            // تفعيل شاشة التوقف بعد صلاة العشاء (0 معطل، 1 مفعل)
ucDohrXminutesAsr	: 0,                            // تأخير الظهر X دقائق بالنسبة للعصر
ucJomoaOnHRscreen	: 0,                            // عرض وقت الجمعة على الشاشة الأفقية (0 معطل، 1 مفعل)
ucJomoaFixedTime	: 'AUTO',                       // وقت ثابت لصلاة الجمعة (AUTO للتحديد التلقائي)
ucAzkar5minPicture	: 0,                            // عرض صور مع الأذكار لمدة 5 دقائق (0 معطل، 1 مفعل)
ucVrNamesInMiddle	: 0,                            // عرض أسماء الصلوات في المنتصف للشاشة العمودية (0 معطل، 1 مفعل)
ucScreenFont		: 'Amiri',                      // الخط المستخدم للشاشة
ucClockFont			: 'FreeSerifBold',              // الخط المستخدم للساعة
ucTimesFont			: 'FreeSerifBold',              // الخط المستخدم لأوقات الصلاة
ucAzkarFont			: 'SULTAN',                     // الخط المستخدم للأذكار
ucAzkarSabahOn		: 1,							// تفعيل أذكار الصباح (0 معطل، 1 مفعل)
ucAzkarAsrOn		: 1,                            // تفعيل أذكار العصر (0 معطل، 1 مفعل)
ucAzkarMaghribOn	: 1,                            // تفعيل أذكار المغرب (0 معطل، 1 مفعل)
ucAzkarIshaOn		: 0,                            // تفعيل أذكار العشاء (0 معطل، 1 مفعل)
ucCounterLastMinute	: 0,                            // عرض العد التنازلي في الدقيقة الأخيرة (0 معطل، 1 مفعل)
ucFullScreenCounter	: 0,                            // عرض العد التنازلي في وضع ملء الشاشة (0 معطل، 1 مفعل)
ucShowIqamaScreen	: 0,                            // عرض شاشة الإقامة (0 معطل، 1 مفعل)
ucHrNamesInMiddle	: 1,                            // عرض أسماء الصلوات في المنتصف للشاشة الأفقية (0 معطل، 1 مفعل)
ucDimmPastPrayers	: 0,                            // تعتيم الصلوات السابقة (0 معطل، 1 مفعل)
ucDateUpRightInHR	: 0,                            // عرض التاريخ في أعلى اليمين في الشاشة الأفقية (0 معطل، 1 مفعل)
ucVerifyInternet	: 0,                            // التحقق من اتصال الإنترنت (0 معطل، 1 مفعل)
ucForcedVertical	: 0,                            // فرض وضع العرض العمودي (0 معطل، 1 عمودي يمينا، 2 عمودي شمالا)
ucJomoaDimmBefore	: 0,                            // تعتيم الشاشة قبل صلاة الجمعة بـ X دقيقة
ucJomoaDimmAfter	: 25,                           // تعتيم الشاشة بعد صلاة الجمعة بـ X دقيقة
ucAzanIqamaByVoice	: 0,                            // تفعيل الأذان والإقامة بالصوت (0 معطل، 1 مفعل)
ucShortAzanActive	: 0,                            // تفعيل الأذان المختصر (0 معطل، 1 مفعل)
ucShortIqamaActive	: 0,                            // تفعيل الإقامة المختصرة (0 معطل، 1 مفعل)
ucIsArabicDigits	: 0,                            // استخدام الأرقام العربية (٠١٢٣٤٥٦٧٨٩) بدلاً من الإنجليزية (0 معطل، 1 مفعل)
ucRamadanDoIsha30min: 0,                            // تأخير صلاة العشاء 30 دقيقة في رمضان (0 معطل، 1 مفعل)
ucInSummerAdd1Hour	: 0,                            // إضافة ساعة في الصيف (التوقيت الصيفي) (0 معطل، 1 مفعل)
ucForce1HourMore	: 0,                            // إضافة ساعة إلى جميع الأوقات (0 معطل، 1 مفعل)
ucForce1HourLess	: 0,                            // إنقاص ساعة من جميع الأوقات (0 معطل، 1 مفعل)
ucActivate24Hours	: 0,                            // تفعيل نظام 24 ساعة (0 معطل، 1 مفعل)
ucClockIsFull		: 0,                            // عرض الساعة بشكل كامل (0 معطل، 1 مفعل)
ucAzkarActive		: 1,                            // تفعيل الأذكار (0 معطل، 1 مفعل)
ucSlidesActive		: 1,                            // تفعيل الشرائح (0 معطل، 1 مفعل)
ucIqamaFullTimes	: 0,                            // عرض أوقات الإقامة الكاملة (0 معطل، 1 مفعل)
ucIqamaCounter		: 1,                            // تفعيل العد التنازلي للإقامة (0 معطل، 1 مفعل)
ucAthanMinutesFAJR	: 0,                            // دقائق الأذان قبل وقت الفجر
ucAthanMinutesSHRQ	: 0,                            // دقائق الأذان قبل وقت الشروق
ucAthanMinutesDOHR	: 0,                            // دقائق الأذان قبل وقت الظهر
ucAthanMinutesASSR	: 0,                            // دقائق الأذان قبل وقت العصر
ucAthanMinutesMGRB	: 0,                            // دقائق الأذان قبل وقت المغرب
ucAthanMinutesISHA	: 0,                            // دقائق الأذان قبل وقت العشاء
ucPrayDurationFAJR	: 9,                            // مدة صلاة الفجر بالدقائق
ucPrayDurationDOHR	: 8,                            // مدة صلاة الظهر بالدقائق
ucPrayDurationASSR	: 8,                            // مدة صلاة العصر بالدقائق
ucPrayDurationMGRB	: 7,                            // مدة صلاة المغرب بالدقائق
ucPrayDurationISHA	: 9,                            // مدة صلاة العشاء بالدقائق
ucIqamaFAJR			: 10,                           // وقت الإقامة بعد الأذان للفجر بالدقائق
ucIqamaSHRQ			: 15,							// وقت الإقامة بعد الأذان للشروق بالدقائق
ucIqamaDOHR			: 10,                           // وقت الإقامة بعد الأذان للظهر بالدقائق
ucIqamaASSR			: 10,                           // وقت الإقامة بعد الأذان للعصر بالدقائق
ucIqamaMGRB			: 10,                           // وقت الإقامة بعد الأذان للمغرب بالدقائق
ucIqamaISHA			: 10,                           // وقت الإقامة بعد الأذان للعشاء بالدقائق
ucFixedIqamaFAJR	: '',                           // وقت إقامة ثابت للفجر (فارغ للاعتماد على الوقت النسبي)
ucFixedIqamaDOHR	: '',                           // وقت إقامة ثابت للظهر (فارغ للاعتماد على الوقت النسبي)
ucFixedIqamaASSR	: '',                           // وقت إقامة ثابت للعصر (فارغ للاعتماد على الوقت النسبي)
ucFixedIqamaISHA	: '',                           // وقت إقامة ثابت للعشاء (فارغ للاعتماد على الوقت النسبي)
ucMeteoLatitude		: 21.3890824,                   // خط العرض المستخدم لمعلومات الطقس
ucMeteoLongitude	: 39.8579118,                   // خط الطول المستخدم لمعلومات الطقس
ucWcsvIsActive		: 0,                            // تفعيل ملف WCSV (0 معطل، 1 مفعل)
ucPsFlag			: 1,                            // علم فلسطين (0 معطل، 1 مفعل)
ucCounterColorAlert	: 1,                            // تغيير لون العد التنازلي للتنبيه (0 معطل، 1 مفعل)
ucBgTubes			: 0,                            // تفعيل الأنابيب في الخلفية (0 معطل، 1 مفعل)
ucCloseMobilePlease	: '﻿من فضلك أغلق الهاتف',        // رسالة طلب إغلاق الهاتف المحمول
ucIqamaHadith		: 0,                            // عرض حديث الإقامة (0 معطل، 1 مفعل)
ucSemiTransparentBgs: 1,                            // خلفيات شبه شفافة (0 معطل، 1 مفعل)
ucPrimaryAzanMinutes: 0,                            // دقائق الأذان الأولي
ucBlackScreenShowsClock	: 1,                        // عرض الساعة على الشاشة السوداء (0 معطل، 1 مفعل)
ucBlackScreenShowsDate	: 0,                        // عرض التاريخ على الشاشة السوداء (0 معطل، 1 مفعل)
ucBlackScreenInPraying	: 1,                        // تفعيل الشاشة السوداء أثناء الصلاة (0 معطل، 1 مفعل)
ucActivateJomoaAzan		: 0,
ucShowAzanWindow		: 1,
ucUseRoundCounterInVR	: 0,
ucUseBigNextPrayCounter	: 0,
ucSlidesRandom			: 1,

ucActivateEidFITR		: 0,
ucActivateEidADHA		: 0,
ucTimeOfEidFITR			: '﻿08:00',
ucTimeOfEidADHA			: '﻿07:00',

ucThemesActiveType		: 0, // Themes type :  0 = manual changing , 1 = change theme every salat , 2 = change everyday, 3 = everyday a random  theme from my selection
ucThemes4eachSalat 		: "7|13|0|16|33|4",	//	"fajr|shrq|dohr|assr|mgrb|isha"     . = skip/don't change theme         X = theme number X to use
											// 	example : if you want to use theme 4 for fajr and for shrq and for dohr, and later theme 25 for maghrib and Isha, you write : "4|.|.|.|25|."
ucThemes4EveryDays 		: "5|8|31|16|7|3|27",	// set everyday'theme number for "Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday"  ( . = skip )
ucThemesMyBGsLista		: "4,6,8,9,18",	//  put here the numbers of the themes you like to be shown randomly everyday  ( 0 to 39 ) 40 themes in app

ucHijriDateFixer		: 0,			// تعديل التاريخ الهجري -3 +3

ucSlidesViewTime		: 15,			// 15 seconds of showing each-Slide  (maximum 60 seconds) minimum 10 seconds
ucTawkitViewTime		: 12,			// 12 seconds of showing main-Screen (maximum 60 seconds) minimum 10 seconds

}

//----------------------------------------------------------------------


const JS_MainAzkarViewTime	= 18; // 18 seconds of viewing each main Azkar
const JS_SabahMasaaViewTime	= 25; // 25 seconds of viewing each Azkar Sabah/Masaa


const JS_SLIDES_OFF_TIME	= 20; // 30 seconds between slides (maximum 300 seconds [5min])


const JS_AZKAR_BG_SEMI_TRANSPARENT	= 1; // make background of Azkar picture semi-transparent  0 or 1

const JS_Minutes_BeforeAZAN_ToChange_Theme = 1;


const JS_AZAN_WINDOW_SHOW_TIME = 60; // 60 seconds to keep showing Azan window (if option enabled)


const JS_IqamaRULE	= "قالَ ﷺ : إذا أُقيمت الصَّلاةُ فلا تقوموا حتى ترَوني قد خرجتُ";
const JS_AFTERAZAN	= "اللهم رب هذه الدعوة التامة، والصلاة القائمة، آت محمدًا الوسيلة والفضيلة، وابعثه المقام المحمود الذي وعدته";
//----------------------------------------------------------------------

const JS_THEMES_VERTICALS	= [      // سمات الخلفية للوضع العمودي
'#462412|#A45015|#6D5646|#F8F5F0',      // ثيم رقم 0 - بني داكن مع خلفية فاتحة
'#462412|#A45015|#6D5646|#F8F5F0',      // ثيم رقم 1 - بني داكن مع خلفية فاتحة
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 2 - أبيض مع خلفية بيج
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 3 - أبيض مع خلفية بيج
'#FFFFFF|#DDC091|#BEAF97|#1C6064',      // ثيم رقم 4 - أبيض وبيج مع لون أخضر مزرق
'#FFFFFF|#DDC091|#BEAF97|#740000',      // ثيم رقم 5 - أبيض وبيج مع لون أحمر داكن
'#FFFFFF|#DDC091|#BEAF97|#0662A7',      // ثيم رقم 6 - أبيض وبيج مع لون أزرق
'#FFFFFF|#DDC091|#BEAF97|#4B211A',      // ثيم رقم 7 - أبيض وبيج مع لون بني محمر
'#FFFFFF|#DDC091|#BEAF97|#02539E',      // ثيم رقم 8 - أبيض وبيج مع لون أزرق داكن
'#FFFFFF|#DDC091|#BEAF97|#821214',      // ثيم رقم 9 - أبيض وبيج مع لون أحمر
'#FFFFFF|#DDC091|#BEAF97|#166466',      // ثيم رقم 10 - أبيض وبيج مع لون أخضر
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 11 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 12 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 13 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 14 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 15 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 16 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 17 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 18 - أبيض وبيج مع لون أسود
'#462412|#A45015|#6D5646|#F8F5F0',      // ثيم رقم 19 - بني داكن مع خلفية فاتحة
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 20 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 21 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 22 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 23 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 24 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 25 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 26 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 27 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 28 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 29 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 30 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 31 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 32 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 33 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 34 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 35 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 36 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 37 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 38 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000'];     // ثيم رقم 39 - أبيض وبيج مع لون أسود

const JS_THEMES_HORIZONTALS	= [      // سمات الخلفية للوضع الأفقي
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 0 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 1 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 2 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 3 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 4 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 5 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 6 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 7 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 8 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 9 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 10 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 11 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 12 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 13 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',	    // ثيم رقم 14 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 15 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 16 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',	    // ثيم رقم 17 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 18 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 19 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 20 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 21 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 22 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 23 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 24 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 25 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 26 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 27 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 28 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 29 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 30 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 31 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 32 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 33 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 34 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 35 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 36 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 37 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000',      // ثيم رقم 38 - أبيض وبيج مع لون أسود
'#FFFFFF|#DDC091|#BEAF97|#000000'];     // ثيم رقم 39 - أبيض وبيج مع لون أسود





