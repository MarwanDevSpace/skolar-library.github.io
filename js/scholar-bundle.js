/**
 * ============================================================================
 * SCHOLAR LIBRARY (مكتبة سكولار الإلكترونية) — MASTER SCRIPT BUNDLE
 * Standalone Zero-Dependency Execution (Works on file:/// and http://)
 * Features: Bilingual Arabic/English Engine, LTR/RTL Logo Swap, Marquee Physics,
 *           Direct Referral Studio with Telegram (@MarwanAIDev) & WhatsApp
 * ============================================================================
 */

(() => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. SCHOLAR STORE & SMOOTH SCROLL
     -------------------------------------------------------------------------- */
  const ScholarStore = {
    init() {
      this.bindSmoothScroll();
    },

    bindSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href').substring(1);
          if (!targetId) return;
          const targetElem = document.getElementById(targetId);
          if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  };

  /* --------------------------------------------------------------------------
     2. BILINGUAL TRANSLATION DICTIONARY & I18N ENGINE (ZERO DIACRITICS & BOLD/THIN)
     -------------------------------------------------------------------------- */
  const ScholarI18n = {
    currentLang: 'ar',

    translations: {
      ar: {
        page_title: 'مكتبة سكولار الأكاديمية | إعداد وتنسيق البحوث والرسائل المكتوبة وجمع المصادر والترجمة',
        nav_charter: 'ميثاق الأمانة',
        nav_about: 'من نحن',
        nav_services: 'خدماتنا',
        nav_guarantees: 'ضمانات العمل',
        nav_order: 'تحويل طلبك',
        nav_faq: 'الأسئلة الشائعة',
        nav_cta: 'تحويل طلب سريع',
        lang_btn_text: 'English',
        lang_btn_title: 'التبديل إلى English',
        hero_title_1: 'مكتبة سكولار',
        hero_title_2: 'الأكاديمية',
        hero_sub: 'فريق متخصص في إعداد وتنسيق بحوث تخرج البكالوريوس ورسائل الماجستير المكتوبة، جمع وتوثيق المصادر لجميع التخصصات، وترجمة المستندات والأبحاث العلمية بدقة عالية وسرعة تسليم متميزة وفق دليل الجامعات المعتمد مع متابعة مستمرة لكافة الملاحظات.',
        hero_btn_order: 'تحويل طلبك مباشرة إلى واتساب',
        hero_btn_about: 'تعرف على فريقنا وضماناتنا',
        trust_iraq: 'دليل الجامعات المعتمد',
        trust_speed: 'تسليم سريع وضمان دقة',
        trust_docs: 'صيغتي Word & PDF',
        three_caption: 'خدمات أكاديمية معتمدة • تنسيق البحوث والرسائل • جمع المصادر • الترجمة التخصصية',
        three_hint: 'اسحب للتنقل بين الخدمات ثلاثية الأبعاد أو انقر للاختيار',
        charter_badge: 'ميثاق الأمانة والنزاهة الأكاديمية • Academic Integrity Charter',
        charter_seal: 'تعهد رسمي معتمد',
        hadith_label: 'من هدي النبوة الشريفة في تحريم انتحال الأعمال والزور',
        hadith_1: 'قال رسول الله ﷺ: «المُتَشَبِّعُ بِمَا لَمْ يُعْطَ كَلَابِسِ ثَوْبَيْ زُورٍ»',
        hadith_1_source: '(متفق عليه: رواه البخاري برقم 5219، ومسلم برقم 2129)',
        hadith_2: 'وقال عليه الصلاة والسلام: «مَنْ غَشَّ فَلَيْسَ مِنَّا»',
        hadith_2_source: '(صحيح مسلم برقم 101)',
        charter_title: 'إعلان براءة الذمة: لا نعمل في البحوث الجاهزة إطلاقاً',
        charter_desc: 'انطلاقاً من النهي النبوي الصريح وحفاظاً على قدسية العلم وأمانته؛ نؤكد في مكتبة سكولار الأكاديمية أننا لا نعمل في البحوث والرسائل الجاهزة إطلاقاً ولا نبيعها ولا نشتريها، ولا ننتحل جهد الطالب. إنما ينحصر دورنا في إعداد وتنسيق الأعمال المكتوبة بيد الطالب، جمع وتوثيق المصادر لكافة التخصصات، والترجمة العلمية المتخصصة.',
        charter_p1_title: 'إعداد وتنسيق المكتوب',
        charter_p1_desc: 'تنسيق وتدقيق بحوث البكالوريوس ورسائل الماجستير المكتوبة بيد الطالب وضبط الهوامش والفهارس وفق دليل جامعته.',
        charter_p2_title: 'جمع وتوثيق المصادر',
        charter_p2_desc: 'جمع وتوثيق المصادر والمراجع الرصينة لجميع التخصصات وتوثيقها رسمياً بأنظمة التوثيق العالمية (APA / IEEE).',
        charter_p3_title: 'الترجمة الأكاديمية',
        charter_p3_desc: 'ترجمة علمية متخصصة ودقيقة لأي مستند أو بحث أو ملخص علمي مع الحفاظ الصارم على المصطلحات الأكاديمية.',
        services_title_bold: 'خدماتنا',
        services_desc: 'فريقنا مختص وسريع الاستجابة، يقدم دعماً عملياً وموثوقاً في إعداد وتنسيق بحوث ورسائل الباحث المكتوبة، جمع وتوثيق المصادر لجميع التخصصات، وترجمة المستندات والأبحاث العلمية بدقة عالية ومتابعة متواصلة.',
        mq_formatting_masters: '<span class="scholar-fw-bold">تنسيق</span> <span class="scholar-fw-thin">رسائل الماجستير</span>',
        mq_formatting_bachelor: '<span class="scholar-fw-bold">تنسيق</span> <span class="scholar-fw-thin">بحوث البكالوريوس</span>',
        mq_sources: '<span class="scholar-fw-bold">جمع</span> <span class="scholar-fw-thin">المصادر لجميع التخصصات</span>',
        mq_translation: '<span class="scholar-fw-bold">ترجمة</span> <span class="scholar-fw-thin">المستندات والأبحاث العلمية</span>',
        mq_proofreading: '<span class="scholar-fw-bold">تدقيق لغوي</span> <span class="scholar-fw-thin">وضبط الفهارس</span>',
        guarantees_title_thin: 'ضمانات',
        guarantees_title_bold: 'العمل',
        guarantees_sub: 'نلتزم بأعلى معايير الإتقان الأكاديمي والسرعة العالية لتسليم أبحاث ورسائل رصينة جاهزة للمناقشة.',
        g1_title: 'تسليم بسرعة عالية',
        g1_sub: 'سرعة في الإنجاز والتسليم',
        g2_title: 'مراجعة مستمرة',
        g2_sub: 'تواصل منتظم وتعديلات مستمرة',
        g3_title: 'دقة وأمانة علمية',
        g3_sub: 'دقة في التنسيق والمراجعة والاستناد على المصادر والبحوث الموثوقة',
        about_badge: 'من نحن • About Us',
        about_heading_bold: 'فريق أكاديمي',
        about_heading_thin: 'متخصص ومتكامل',
        about_exact_statement: 'نحن فريق مختص في الخدمات الأكاديمية للجامعات والمعاهد؛ نختص في إعداد وتنسيق ومراجعة بحوث البكالوريوس ورسائل الماجستير المكتوبة، جمع وتوثيق المصادر لجميع التخصصات، والترجمة الأكاديمية التخصصية. نحن لا نعمل في البحوث الجاهزة إطلاقاً التزاماً بالأمانة العلمية وقول النبي ﷺ: «مَنْ غَشَّ فَلَيْسَ مِنَّا»، وما يميزنا السرعة العالية في التسليم ومتابعة الملاحظات.',
        word_desc: 'صيغة محررة بالكامل وقابلة للتعديل مع ضبط الهوامش وأنماط الخطوط المعتمدة لكلية الطالب.',
        pdf_desc: 'نسخة نهائية موثقة وجاهزة للطباعة والمناقشة الفورية مع ثبات الفهارس والجداول والمراجع.',
        docs_seal_text: 'تسليم بصيغتي Word و PDF معاً في كل عمل أكاديمي لضمان الراحة التامة للمناقشة والمراجعة',
        order_title_thin: 'تحويل',
        order_title_bold: 'طلبك مباشرة',
        order_desc: 'املأ المعلومات الأساسية أدناه وسيتم تحويل طلبك مباشرة إلى واتساب أو تليغرام المكتبة للتواصل الفوري مع المستشار الأكاديمي.',
        label_name: 'الاسم أو اللقب (اختياري)',
        ph_name: 'مثال: علي العراقي',
        label_degree: 'الخدمة الأكاديمية المطلوبة',
        chip_quick: 'اختيار سريع:',
        opt_master: 'إعداد وتنسيق رسائل الماجستير المكتوبة',
        opt_bachelor: 'إعداد وتنسيق بحوث البكالوريوس المكتوبة',
        opt_sources: 'جمع المصادر لجميع التخصصات',
        opt_translation: 'ترجمة أي مستند أو بحث علمي',
        opt_reports: 'تدقيق لغوي وتنسيق تقارير',
        opt_other: 'أخرى (استشارة أكاديمية مخصصة)',
        chip_master: 'رسائل ماجستير مكتوبة',
        chip_bachelor: 'بحوث بكالوريوس مكتوبة',
        chip_sources: 'جمع المصادر',
        chip_translation: 'ترجمة علمية',
        chip_reports: 'تدقيق وتنسيق',
        chip_other: 'أخرى',
        label_univ: 'الجامعة والكلية',
        ph_univ: 'اكتب اسم جامعتك وكليتك (مثال: جامعة بغداد / كلية الإدارة والاقتصاد)',
        label_topic: 'عنوان الدراسة أو تفاصيل المستند / فكرة البحث',
        ph_topic: 'اكتب هنا عنوان دراستك، فكرة المستند المطلوب تنسيقه، مجال المصادر، أو تفاصيل الترجمة بدقة...',
        label_notes: 'ملاحظات أو موعد التسليم ونظام التوثيق',
        ph_notes: 'مثال: موعد التسليم المطلوب، نظام التوثيق (APA/IEEE)، أو متطلبات خاصة...',
        preview_title: 'معاينة مباشرة لبطاقة التحويل الأكاديمي المجهزة للمستشار',
        meta_service_label: 'الخدمة المطلوبة',
        meta_univ_label: 'الجامعة والكلية',
        meta_student_label: 'اسم الباحث',
        meta_notes_label: 'الموعد والملاحظات',
        meta_topic_label: 'موضوع أو تفاصيل المستند المطلوب:',
        meta_payload_label: 'نص الإرسال التلقائي المجهز للمحادثة:',
        btn_copy: '📋 نسخ نص الرسالة',
        btn_send_wa: 'تحويل مباشر عبر WhatsApp',
        btn_send_tg: 'تحويل عبر Telegram (@MarwanAIDev)',
        order_notice: '🔒 سيتم فتح المحادثة مباشرة مع مستشارك الأكاديمي مع رسالة منظمة بالبيانات أعلاه لمتابعة العمل فوراً.',
        faq_badge: 'إجابات شافية ووضوح أكاديمي',
        faq_title_thin: 'الأسئلة',
        faq_title_bold: 'الشائعة',
        faq_desc: 'إجابات مباشرة عن أهم الأسئلة والضوابط التي تهم الباحثين وطلبة الدراسات العليا والأولية في الجامعات العراقية.',
        faq_q1: 'هل تعملون في بيع أو إعداد البحوث والرسائل الجاهزة؟',
        faq_a1: 'لا نعمل في البحوث الجاهزة نهائياً ولا نبيعها ولا نشتريها، التزاماً بأمانة البحث العلمي وامتثالاً للنهي النبوي الشريف: «المُتَشَبِّعُ بِمَا لَمْ يُعْطَ كَلَابِسِ ثَوْبَيْ زُورٍ» و«مَنْ غَشَّ فَلَيْسَ مِنَّا». يقتصر دورنا على الإعداد والتنسيق الشكلي لأعمال الطالب المكتوبة، جمع وتوثيق المصادر لكافة التخصصات، والترجمة العلمية المتخصصة.',
        faq_q2: 'هل تلتزمون بدليل كتابة الرسائل والأطاريح المعتمد في كليتي وجامعتي؟',
        faq_a2: 'نعم، التزاما تاما. نطبق هوامش الصفحات، قياسات الخطوط المعتمدة، ترقيم الأبواب والفصول، وأنظمة التوثيق الرسمية بدقة مطابقة لدليل جامعتك وكليتك دون أي خلل شكلي.',
        faq_q3: 'هل تشمل الخدمة مراجعة وتعديلات مستمرة بعد التسليم؟',
        faq_a3: 'نعم بالتأكيد، نقدم مراجعة وتعديلات مستمرة على العمل حتى بعد تسليمه لتطبيق كافة توجيهات الأستاذ المشرف وملاحظات القسم دون أي تأخير أو تعقيد.',
        faq_q4: 'ما هي نوعية الخدمات الأكاديمية المتاحة لديكم؟',
        faq_a4: 'نوفر إعداد وتنسيق رسائل الماجستير وبحوث البكالوريوس المكتوبة وفق دليل جامعتك، جمع وتوثيق المصادر والمراجع لكافة التخصصات بنظم التوثيق العالمية (APA / IEEE)، والترجمة الأكاديمية التخصصية للمستندات والأوراق العلمية، بالإضافة إلى التدقيق اللغوي وضبط الهوامش والفهارس.',
        faq_q5: 'كيف يتم التواصل والتعامل المالي في العراق؟',
        faq_a5: 'التواصل فوري ومباشر عبر تليغرام (@MarwanAIDev) أو عبر WhatsApp. والتعاملات المالية متوفرة بأقساط مرحلية ميسرة عبر المحافظ الإلكترونية أو الحوالات المحلية، بما يلائم جميع الطلبة والباحثين في كافة المحافظات العراقية.',
        footer_brand_title_thin: 'مكتبة سكولار',
        footer_brand_title_bold: 'الأكاديمية',
        footer_brand_sub: 'Scholar Academic Library • دعم بحوث التخرج والدراسات العليا في العراق',
        footer_rights: '© 2026 مكتبة سكولار الأكاديمية (Scholar Academic Library). جميع الحقوق محفوظة لطلبة وباحثي الجامعات العراقية.',
        footer_compliance: 'التزام كامل بضوابط وتعليمات وزارة التعليم العالي والبحث العلمي',
        footer_wa: 'تواصل واتساب',
        footer_tg: 'تليغرام: @MarwanAIDev',
        modal_badge: 'معاينة نموذج من دراساتنا',
        modal_default_title: 'عنوان البحث'
      },
      en: {
        page_title: 'Scholar Academic Library | Manuscript Formatting, Scholarly Sources & Academic Translation',
        nav_charter: 'Integrity Pledge',
        nav_about: 'About Us',
        nav_services: 'Services',
        nav_guarantees: 'Guarantees',
        nav_order: 'Direct Referral',
        nav_faq: 'FAQ',
        nav_cta: 'Quick Referral',
        lang_btn_text: 'العربية',
        lang_btn_title: 'Switch to Arabic',
        hero_title_1: 'Scholar',
        hero_title_2: 'Academic Library',
        hero_sub: 'A specialized team dedicated to preparing and formatting written Bachelor research and Master theses, gathering peer-reviewed sources across all disciplines, and translating academic documents according to accredited university standards with continuous follow-up.',
        hero_btn_order: 'Transfer Request via WhatsApp',
        hero_btn_about: 'Meet Our Team & Guarantees',
        trust_iraq: 'Accredited University Standards',
        trust_speed: 'Rapid Turnaround & Rigor',
        trust_docs: 'Word & PDF Formats Included',
        three_caption: 'Accredited Academic Services • Manuscript Layout • Scholarly Sources • Academic Translation',
        three_hint: 'Swipe to navigate 3D service cards or click to select',
        charter_badge: 'Academic Integrity & Scholarly Charter',
        charter_seal: 'Official Verification',
        hadith_label: 'From Prophetic Teachings Condemning Fraud and False Attribution',
        hadith_1: 'The Prophet ﷺ said: "He who pretends to have what he has not been given is like one wearing two garments of falsehood."',
        hadith_1_source: '(Agreed upon: Sahih al-Bukhari #5219, Sahih Muslim #2129)',
        hadith_2: 'The Prophet ﷺ also said: "Whoever deceives is not of us."',
        hadith_2_source: '(Sahih Muslim #101)',
        charter_title: 'Declaration of Academic Integrity: Zero Ready-Made Researches',
        charter_desc: 'Grounding ourselves in genuine scholarly integrity and authentic Prophetic instruction, we at Scholar Academic Library firmly declare that we NEVER author, buy, or sell ready-made dissertations or pre-fabricated research. Our accredited atelier exclusively assists students with manuscript formatting of their own writing, peer-reviewed source curation, and precision scientific translation.',
        charter_p1_title: 'Manuscript Formatting',
        charter_p1_desc: 'Formatting and proofreading written Master theses and Bachelor research manuscripts, setting margins and indices per official manual.',
        charter_p2_title: 'Scholarly Sources',
        charter_p2_desc: 'Curating and referencing authentic peer-reviewed papers and indexed studies across all disciplines (APA / IEEE).',
        charter_p3_title: 'Academic Translation',
        charter_p3_desc: 'Specialized scientific translation for research papers, theses, and scholarly abstracts with strict terminological rigor.',
        services_title_bold: 'Services',
        services_desc: 'Our specialized, fast-response team provides dependable academic assistance focusing on formatting written manuscripts, curating peer-reviewed sources, and precision translation.',
        mq_formatting_masters: '<span class="scholar-fw-bold">Master\'s</span> <span class="scholar-fw-thin">Thesis Layout</span>',
        mq_formatting_bachelor: '<span class="scholar-fw-bold">Bachelor\'s</span> <span class="scholar-fw-thin">Research Layout</span>',
        mq_sources: '<span class="scholar-fw-bold">Sources</span> <span class="scholar-fw-thin">Across All Disciplines</span>',
        mq_translation: '<span class="scholar-fw-bold">Scientific</span> <span class="scholar-fw-thin">& Academic Translation</span>',
        mq_proofreading: '<span class="scholar-fw-bold">Proofreading</span> <span class="scholar-fw-thin">& Layout Indexing</span>',
        guarantees_title_thin: 'Our Work',
        guarantees_title_bold: 'Guarantees',
        guarantees_sub: 'We adhere to rigorous academic standards and rapid execution to deliver defense-ready formatted manuscripts and verified references.',
        g1_title: 'High-Speed Delivery',
        g1_sub: 'Rapid execution and timely completion',
        g2_title: 'Continuous Revision',
        g2_sub: 'Regular communication and seamless supervisor edits',
        g3_title: 'Rigor & Integrity',
        g3_sub: 'Meticulous formatting grounded in authentic peer-reviewed sources',
        about_badge: 'About Us • Mission',
        about_heading_bold: 'Dedicated Academic',
        about_heading_thin: 'Team & Mentors',
        about_exact_statement: 'We are a specialized team in academic support for universities and institutes, dedicated to formatting, reviewing, and proofreading written Bachelor research and Master theses, gathering scholarly sources across all disciplines, and translating academic documents. We strictly do not engage in ready-made research sales adhering to the Prophetic teaching: "Whoever deceives is not of us", and what distinguishes us is prompt delivery and attentive follow-up.',
        word_desc: 'Fully editable format with custom margins, typography, and citation styles tailored to your college manual.',
        pdf_desc: 'Print-ready, fixed-layout document ideal for immediate defense, preserving tables, charts, and indices.',
        docs_seal_text: 'Both Word and PDF formats are delivered together for every academic project for effortless review and defense',
        order_title_thin: 'Direct',
        order_title_bold: 'Project Referral',
        order_desc: 'Enter your project parameters to generate a pre-formatted, structured request sent directly to your consultant on WhatsApp or Telegram.',
        label_name: 'Researcher Name / Pseudonym (Optional)',
        ph_name: 'e.g. Ali Al-Iraqi',
        label_degree: 'Requested Academic Service',
        chip_quick: 'Quick Select:',
        opt_master: 'Written Master Thesis Formatting',
        opt_bachelor: 'Written Bachelor Research Formatting',
        opt_sources: 'Scholarly Sources Across All Disciplines',
        opt_translation: 'Scientific & Academic Translation',
        opt_reports: 'Proofreading & Reports Layout',
        opt_other: 'Other (Custom Academic Consultation)',
        chip_master: 'Master Theses',
        chip_bachelor: 'Bachelor Research',
        chip_sources: 'Sources Gathering',
        chip_translation: 'Academic Translation',
        chip_reports: 'Proofreading & Layout',
        chip_other: 'Other',
        label_univ: 'University & College',
        ph_univ: 'Enter your university and college (e.g. University of Baghdad / Business)',
        label_topic: 'Study Title or Document Details / Research Scope',
        ph_topic: 'Type your study title, document requirements, source discipline, or translation details...',
        label_notes: 'Notes, Deadline & Citation System',
        ph_notes: 'e.g. Deadline in 2 weeks, APA or IEEE citation system, or specific supervisor notes...',
        preview_title: 'Live Preview of Official Academic Dispatch Dossier:',
        meta_service_label: 'Requested Service',
        meta_univ_label: 'University & College',
        meta_student_label: 'Researcher Name',
        meta_notes_label: 'Deadline & Notes',
        meta_topic_label: 'Study Title or Document Details:',
        meta_payload_label: 'Compiled Dispatch Payload for Instant Messaging:',
        btn_copy: '📋 Copy Message Text',
        btn_send_wa: 'Direct Transfer via WhatsApp',
        btn_send_tg: 'Direct Transfer via Telegram (@MarwanAIDev)',
        order_notice: '🔒 The conversation will open directly with your academic consultant with the structured request above.',
        faq_badge: 'Academic Guidance & Clarity',
        faq_title_thin: 'Frequently Asked',
        faq_title_bold: 'Questions',
        faq_desc: 'Direct, clear answers regarding academic regulations, turnaround times, revisions, and coordination in Iraq.',
        faq_q1: 'Do you sell or author ready-made researches or theses?',
        faq_a1: 'We strictly do NOT engage in ready-made research sales or ghostwriting under any circumstances, adhering to academic research ethics and the Prophetic guidance: "He who pretends to have what he has not been given is like one wearing two garments of falsehood" and "Whoever deceives is not of us". Our role is exclusively restricted to manuscript layout and proofreading of the student\'s own written work, curating verified peer-reviewed sources across all disciplines, and scientific translation.',
        faq_q2: 'Do you strictly follow the thesis manual and formatting guidelines approved by my university and college?',
        faq_a2: 'Yes, with 100% compliance. We rigorously format page margins, official university font sizes, chapter headings, and approved reference documentation styles matching your university and college guidelines without any discrepancy.',
        faq_q3: 'Does the service include continuous revisions and modifications after initial delivery?',
        faq_a3: 'Yes, absolutely. We provide comprehensive continuous revisions and edits on the work even after delivery to implement all directives from your supervising professor and departmental committee without delay.',
        faq_q4: 'What types of academic services are available?',
        faq_a4: 'We provide manuscript formatting and structural layout for written Master theses and Bachelor graduation research according to your university guide, gathering and cataloging peer-reviewed literature across all disciplines in international citation styles (APA / IEEE), specialized academic translation, and comprehensive linguistic proofreading.',
        faq_q5: 'How is coordination and financial payment handled in Iraq?',
        faq_a5: 'Communication is direct and immediate via Telegram (@MarwanAIDev) or WhatsApp. Financial transactions are available in convenient milestone installments through e-wallets or local bank transfers across all Iraqi governorates.',
        footer_brand_title_thin: 'Scholar',
        footer_brand_title_bold: 'Academic Library',
        footer_brand_sub: 'Scholar Academic Library • Undergraduate & Graduate Research Support',
        footer_rights: '© 2026 Scholar Academic Library. All rights reserved for Iraqi scholars and university students.',
        footer_compliance: 'Full compliance with institutional and higher education research standards',
        footer_wa: 'Contact via WhatsApp',
        footer_tg: 'Telegram: @MarwanAIDev',
        modal_badge: 'Sample Study Inspection',
        modal_default_title: 'Research Title'
      }
    },

    init() {
      const savedLang = localStorage.getItem('scholar_lang');
      if (savedLang === 'en' || savedLang === 'ar') {
        this.currentLang = savedLang;
      }
      this.applyLanguage(this.currentLang);

      const btn = document.getElementById('btnLangToggle');
      if (btn) {
        btn.addEventListener('click', () => {
          this.toggleLanguage();
        });
      }
    },

    toggleLanguage() {
      const btn = document.getElementById('btnLangToggle');
      if (btn) {
        btn.classList.remove('ink-globe-spinning');
        void btn.offsetWidth; // Force reflow to re-trigger animation
        btn.classList.add('ink-globe-spinning');
        setTimeout(() => btn.classList.remove('ink-globe-spinning'), 750);
      }

      const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
      this.currentLang = nextLang;
      localStorage.setItem('scholar_lang', nextLang);
      this.applyLanguage(nextLang);
    },

    applyLanguage(lang) {
      this.currentLang = lang;
      const t = this.translations[lang] || this.translations.ar;

      // Update HTML attributes for bidirectional flipping
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.body.classList.toggle('lang-en', lang === 'en');
      document.body.classList.toggle('lang-ar', lang === 'ar');

      // Update document title
      if (t.page_title) document.title = t.page_title;

      // Smart Header & Footer Logo Switch (logo-ar.png for Arabic RTL, logo-en.png for English LTR)
      const navLogo = document.getElementById('mainNavbarLogo');
      const footerLogo = document.getElementById('mainFooterLogo');
      const langCode = document.getElementById('langToggleCode');
      const btnToggle = document.getElementById('btnLangToggle');

      if (lang === 'en') {
        if (navLogo) navLogo.src = 'logo-en.png';
        if (footerLogo) footerLogo.src = 'logo-en.png';
        if (langCode) langCode.textContent = 'عربي';
        if (btnToggle) {
          btnToggle.title = t.lang_btn_title;
          btnToggle.setAttribute('aria-label', t.lang_btn_title);
        }
      } else {
        if (navLogo) navLogo.src = 'logo-ar.png';
        if (footerLogo) footerLogo.src = 'logo-ar.png';
        if (langCode) langCode.textContent = 'EN';
        if (btnToggle) {
          btnToggle.title = t.lang_btn_title;
          btnToggle.setAttribute('aria-label', t.lang_btn_title);
        }
      }

      // Update text nodes with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
          if (t[key].includes('<br>') || t[key].includes('<em>') || t[key].includes('<span') || t[key].includes('★') || t[key].includes('📋') || t[key].includes('•')) {
            el.innerHTML = t[key];
          } else {
            el.textContent = t[key];
          }
        }
      });

      // Update Input Placeholders
      const phMap = {
        refStudentName: t.ph_name,
        refUniversity: t.ph_univ,
        refTopic: t.ph_topic,
        refNotes: t.ph_notes
      };
      for (const [id, val] of Object.entries(phMap)) {
        const el = document.getElementById(id);
        if (el && val) el.placeholder = val;
      }

      // Update dynamic tooltips and ARIA accessibility attributes
      const floatTg = document.getElementById('floatBtnTelegram');
      if (floatTg) {
        floatTg.title = lang === 'ar' ? 'محادثة تليغرام @MarwanAIDev' : 'Telegram Chat @MarwanAIDev';
        floatTg.setAttribute('aria-label', lang === 'ar' ? 'تليغرام' : 'Telegram');
      }

      const floatWa = document.getElementById('floatBtnWhatsapp');
      if (floatWa) {
        floatWa.title = lang === 'ar' ? 'محادثة واتساب' : 'WhatsApp Chat';
        floatWa.setAttribute('aria-label', lang === 'ar' ? 'واتساب' : 'WhatsApp');
      }

      const floatTop = document.getElementById('btnScrollTop');
      if (floatTop) {
        floatTop.title = lang === 'ar' ? 'العودة لأعلى الصفحة' : 'Back to top';
        floatTop.setAttribute('aria-label', lang === 'ar' ? 'أعلى الصفحة' : 'Back to top');
      }

      const modalClose = document.getElementById('inkModalClose');
      if (modalClose) {
        modalClose.setAttribute('aria-label', lang === 'ar' ? 'إغلاق النافذة' : 'Close Dialog');
      }

      const menuToggle = document.getElementById('btnMobileMenuToggle');
      if (menuToggle) {
        menuToggle.setAttribute('aria-label', lang === 'ar' ? 'القائمة' : 'Menu');
      }

      const canvas3D = document.getElementById('scholarHeroCanvas3D');
      if (canvas3D) {
        canvas3D.setAttribute('aria-label', lang === 'ar' ? 'عرض ثلاثي الأبعاد تفاعلي للجامعات العراقية المعتمدة' : 'Interactive 3D Stage of Accredited Iraqi Universities');
      }

      // Update live preview in matching language
      if (typeof ScholarReferral !== 'undefined' && ScholarReferral.updateLivePreview) {
        ScholarReferral.updateLivePreview();
      }

      // Update 3D Universities cards in matching language
      if (typeof ScholarUniversities3D !== 'undefined' && ScholarUniversities3D.updateLanguage) {
        ScholarUniversities3D.updateLanguage(lang);
      }
    }
  };

  /* --------------------------------------------------------------------------
     3. MOBILE DRAWER CONTROLLER (NEVER HIDES, SMOOTH ACCESSIBILITY)
     -------------------------------------------------------------------------- */
  const ScholarMobileMenu = {
    init() {
      const toggleBtn = document.getElementById('btnMobileMenuToggle');
      const drawer = document.getElementById('mobileDrawer');

      if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = drawer.classList.contains('is-open');
          if (isOpen) {
            this.closeDrawer();
          } else {
            this.openDrawer();
          }
        });

        // Close when clicking any link inside drawer
        drawer.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => {
            this.closeDrawer();
          });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
          if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
            this.closeDrawer();
          }
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
            this.closeDrawer();
          }
        });
      }
    },

    openDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      const toggleBtn = document.getElementById('btnMobileMenuToggle');
      if (drawer) {
        drawer.classList.add('is-open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
      }
    },

    closeDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      const toggleBtn = document.getElementById('btnMobileMenuToggle');
      if (drawer) {
        drawer.classList.remove('is-open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  };

  /* --------------------------------------------------------------------------
     4. INFINITE MARQUEE CONTROLLER (TOUCH SLOWDOWN & HOVER PAUSE)
     -------------------------------------------------------------------------- */
  const ScholarMarquee = {
    init() {
      const container = document.getElementById('servicesMarquee');
      if (!container) return;

      const slowDown = () => container.classList.add('is-slowed');
      const resumeSpeed = () => container.classList.remove('is-slowed');

      // Mouse events
      container.addEventListener('mouseenter', slowDown);
      container.addEventListener('mouseleave', resumeSpeed);

      // Touch events for mobile & touchscreens
      container.addEventListener('touchstart', slowDown, { passive: true });
      container.addEventListener('touchend', resumeSpeed, { passive: true });
      container.addEventListener('touchcancel', resumeSpeed, { passive: true });

      // Pointer events for stylus and trackpad
      container.addEventListener('pointerdown', slowDown);
      container.addEventListener('pointerup', resumeSpeed);
    }
  };

  /* --------------------------------------------------------------------------
     5. DIRECT REFERRAL MODULE (نظام تحويل الطلب المباشر والتفاعل الحي)
     -------------------------------------------------------------------------- */
  const ScholarReferral = {
    init() {
      const btnWhatsapp = document.getElementById('btnSendWhatsapp');
      const btnTelegram = document.getElementById('btnSendTelegram');
      const btnCopyPreview = document.getElementById('btnCopyLivePreview');

      if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', () => this.send('whatsapp'));
      }
      if (btnTelegram) {
        btnTelegram.addEventListener('click', () => this.send('telegram'));
      }
      if (btnCopyPreview) {
        btnCopyPreview.addEventListener('click', () => this.copyPreview(btnCopyPreview));
      }

      // Bind input live preview listeners
      const inputs = [
        'refStudentName',
        'refDegree',
        'refUniversity',
        'refTopic',
        'refNotes'
      ];
      inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', () => this.updateLivePreview());
          el.addEventListener('change', () => this.updateLivePreview());
        }
      });

      // Degree preset chips
      document.querySelectorAll('.ink-quick-chip[data-degree]').forEach(chip => {
        chip.addEventListener('click', () => {
          const degSelect = document.getElementById('refDegree');
          if (degSelect) {
            degSelect.value = chip.dataset.degree;
            document.querySelectorAll('.ink-quick-chip[data-degree]').forEach(c => c.classList.remove('is-active'));
            chip.classList.add('is-active');
            this.updateLivePreview();
          }
        });
      });

      // Initial live preview render
      this.updateLivePreview();
    },

    getFormData() {
      const isEn = ScholarI18n.currentLang === 'en';
      const studentName = document.getElementById('refStudentName')?.value.trim() || (isEn ? 'Respected Scholar' : 'باحث كريم');
      const degEl = document.getElementById('refDegree');
      const degree = degEl ? degEl.options[degEl.selectedIndex]?.text : (isEn ? 'Written Master Thesis Formatting' : 'إعداد وتنسيق رسائل الماجستير المكتوبة');
      const university = document.getElementById('refUniversity')?.value.trim() || (isEn ? 'University / Faculty' : 'جامعة / كلية الطالب');
      const topic = document.getElementById('refTopic')?.value.trim() || (isEn ? 'Requesting manuscript formatting & scholarly sources' : 'طلب إعداد وتنسيق / استشارة أكاديمية ومصادر');
      const notes = document.getElementById('refNotes')?.value.trim() || (isEn ? 'According to Schedule' : 'وفق الجدول الزمني المطلوب');

      return { studentName, degree, university, topic, notes };
    },

    formatMessage(data) {
      const isEn = ScholarI18n.currentLang === 'en';
      if (isEn) {
        return (
          `Hello,\n` +
          `I would like to coordinate an academic service with Scholar Library:\n\n` +
          `📋 *Requested Service:* ${data.degree}\n` +
          `🏛️ *University & Faculty:* ${data.university}\n` +
          `👤 *Researcher:* ${data.studentName}\n` +
          `📖 *Topic / Document Details:* ${data.topic}\n` +
          `⏳ *Deadline & Notes:* ${data.notes}\n\n` +
          `(Note: Adhering to academic integrity, services are for manuscript layout of written work, verified sources & academic translation)\n` +
          `Please provide the workflow details and turnaround time. Thank you.`
        );
      } else {
        return (
          `السلام عليكم ورحمة الله وبركاته،\n` +
          `أود الاستفسار والتنسيق بخصوص خدمة أكاديمية لدى مكتبة سكولار:\n\n` +
          `📋 *الخدمة المطلوبة:* ${data.degree}\n` +
          `🏛️ *الجامعة والكلية:* ${data.university}\n` +
          `👤 *اسم الباحث:* ${data.studentName}\n` +
          `📖 *تفاصيل الموضوع / المستند:* ${data.topic}\n` +
          `⏳ *الموعد والملاحظات:* ${data.notes}\n\n` +
          `(ملاحظة: العمل خاص بالأعمال المكتوبة وتنسيقها ومصادرها وترجمتها التزاماً بالأمانة العلمية)\n` +
          `يرجى موافاتي بالمسار والوقت المتاح للبدء. شكراً لكم.`
        );
      }
    },

    updateLivePreview() {
      const data = this.getFormData();
      const previewBox = document.getElementById('liveMessagePreview');
      if (previewBox) {
        previewBox.textContent = this.formatMessage(data);
      }

      // Live update structured dossier card fields
      const serviceEl = document.getElementById('dossierValService');
      const univEl = document.getElementById('dossierValUniv');
      const studentEl = document.getElementById('dossierValStudent');
      const notesEl = document.getElementById('dossierValNotes');
      const topicEl = document.getElementById('dossierValTopic');

      if (serviceEl) serviceEl.textContent = data.degree;
      if (univEl) univEl.textContent = data.university;
      if (studentEl) studentEl.textContent = data.studentName;
      if (notesEl) notesEl.textContent = data.notes;
      if (topicEl) topicEl.textContent = data.topic;
    },

    copyPreview(btn) {
      const isEn = ScholarI18n.currentLang === 'en';
      const data = this.getFormData();
      const msg = this.formatMessage(data);
      navigator.clipboard.writeText(msg).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = isEn ? '<span>✓ Copied to Clipboard!</span>' : '<span>✓ تم النسخ بنجاح!</span>';
        btn.style.background = '#10B981';
        btn.style.color = '#FFFFFF';
        btn.style.borderColor = '#10B981';
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2200);
      }).catch(() => {
        btn.innerHTML = isEn ? '<span>✓ Copied!</span>' : '<span>✓ نُسخ!</span>';
      });
    },

    send(channel) {
      const data = this.getFormData();
      const msg = this.formatMessage(data);

      if (channel === 'whatsapp') {
        const waUrl = `https://api.whatsapp.com/send?phone=9647500000000&text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
      } else if (channel === 'telegram') {
        const tgUrl = `https://t.me/MarwanAIDev?text=${encodeURIComponent(msg)}`;
        window.open(tgUrl, '_blank');
      }
    }
  };

  /* --------------------------------------------------------------------------
     6. FAQ ACCORDION CONTROLLER
     -------------------------------------------------------------------------- */
  const ScholarFaq = {
    init() {
      const items = document.querySelectorAll('.ink-faq-item');
      items.forEach(item => {
        const questionBtn = item.querySelector('.ink-faq-question');
        if (questionBtn) {
          questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            items.forEach(i => {
              i.classList.remove('is-open');
              const btn = i.querySelector('.ink-faq-question');
              if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
              item.classList.add('is-open');
              questionBtn.setAttribute('aria-expanded', 'true');
            }
          });
        }
      });
    }
  };

  /* --------------------------------------------------------------------------
     7. FLOATING QUICK BAR & SCROLL-TOP
     -------------------------------------------------------------------------- */
  const ScholarFloatingBar = {
    init() {
      const bar = document.getElementById('floatingQuickBar');
      const scrollTopBtn = document.getElementById('btnScrollTop');

      if (bar) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 380) {
            bar.classList.add('is-visible');
          } else {
            bar.classList.remove('is-visible');
          }
        }, { passive: true });
      }

      if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    }
  };

  /* --------------------------------------------------------------------------
     8. FAST ELEMENT ENTRANCE MOTION INITIALIZER
     -------------------------------------------------------------------------- */
  const ScholarMotion = {
    init() {
      const staggerElements = document.querySelectorAll('.scholar-stagger-item, .scholar-reveal-fast');
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });
        staggerElements.forEach(el => observer.observe(el));
      }
    }
  };

  /* --------------------------------------------------------------------------
     8. SCHOLAR SERVICES 3D EXPERIENCE (THREE.JS BESPOKE CARDS)
     Showcasing 3 Core Academic Services in High-Craft 3D without Clunky Buttons
     -------------------------------------------------------------------------- */
  const ScholarServices3D = {
    canvas: null,
    container: null,
    scene: null,
    camera: null,
    renderer: null,
    cardGroup: null,
    cards: [],
    particles: null,
    animFrameId: null,
    clock: null,
    isVisible: true,
    pointer: { x: 0, y: 0, targetX: 0, targetY: 0 },
    currentLang: 'ar',
    raycaster: null,
    mouseVec: null,
    hoveredIndex: -1,
    activeIndex: 1, // Sources in Center Stage by default

    services: [
      {
        id: 'formatting',
        nameAr: 'إعداد وتنسيق البحوث والرسائل',
        nameEn: 'Research & Thesis Layout',
        subAr: 'لبحوث البكالوريوس ورسائل الماجستير المكتوبة',
        subEn: 'For Written Bachelor & Master Manuscripts',
        badgeAr: 'تنسيق شكلي • ضبط هوامش • تدقيق لغوي',
        badgeEn: 'Manuscript Layout • Margins • Proofreading',
        scopeAr: 'مواءمة تامة مع دليل كتابة الرسائل الجامعي المعتمد',
        scopeEn: 'Full Alignment with Official University Guidelines',
        statsAr: 'جاهزية كاملة بصيغتي Word و PDF للمناقشة',
        statsEn: 'Delivered in Word & PDF Ready for Review',
        charterAr: 'خدمة خاصة بالأعمال المكتوبة • لا بحوث جاهزة إطلاقاً',
        charterEn: 'Exclusively for Written Works • Zero Ghostwriting',
        tagAr: '// مواصفات الخدمة الأكاديمية • 01',
        tagEn: '// SPECIFICATION SPEC SHEET • 01',
        primary: '#0D1C34',
        accent: '#10B981'
      },
      {
        id: 'sources',
        nameAr: 'جمع وتوثيق المصادر والمراجع',
        nameEn: 'Scholarly Sources Gathering',
        subAr: 'لكافة التخصصات والكليات الجامعية',
        subEn: 'Peer-Reviewed & Indexed Literature',
        badgeAr: 'فهرسة وتوثيق • DOI • أنظمة APA و IEEE',
        badgeEn: 'Indexing & Citation • DOI • APA & IEEE',
        scopeAr: 'استخراج وتوثيق أحدث الدراسات والمراجع الرصينة والمحكمة',
        scopeEn: 'Curating Verified Scholarly Papers Across Disciplines',
        statsAr: 'مصادر حديثة وموثقة بروابطها المعتمدة',
        statsEn: 'Up-to-Date Sources with Official DOI Links',
        charterAr: 'توثيق أكاديمي نزيه ومستند لقواعد البيانات العالمية',
        charterEn: 'Rigorous Citation Standards Indexed in Global DBs',
        tagAr: '// مواصفات الخدمة الأكاديمية • 02',
        tagEn: '// SPECIFICATION SPEC SHEET • 02',
        primary: '#0A182C',
        accent: '#38BDF8'
      },
      {
        id: 'translation',
        nameAr: 'الترجمة الأكاديمية المتخصصة',
        nameEn: 'Scientific & Academic Translation',
        subAr: 'للأوراق العلمية والملخصات والمستندات',
        subEn: 'Precision Academic & Paper Translation',
        badgeAr: 'دقة المصطلحات • صياغة لغوية رصينة',
        badgeEn: 'Terminological Rigor • Human Scholarly Tone',
        scopeAr: 'ترجمة متخصصة خالية تماماً من الركاكة والترجمة الآلية',
        scopeEn: 'Expert Translation for Research Papers & Abstracts',
        statsAr: 'تدقيق المصطلحات والمفاهيم العلمية التخصصية',
        statsEn: 'Zero AI-Slop • Rigorous Human Scholarly Review',
        charterAr: 'ترجمة بشرية احترافية تضمن سلامة المعنى العلمي',
        charterEn: 'Professional Human Translation Preserving Scholarly Rigor',
        tagAr: '// مواصفات الخدمة الأكاديمية • 03',
        tagEn: '// SPECIFICATION SPEC SHEET • 03',
        primary: '#091A2A',
        accent: '#A78BFA'
      }
    ],

    init() {
      this.canvas = document.getElementById('scholarHeroCanvas3D');
      this.container = document.getElementById('scholarHeroCanvasWrap');
      if (!this.canvas || !this.container) return;

      if (typeof THREE === 'undefined') {
        setTimeout(() => this.init(), 120);
        return;
      }

      this.currentLang = document.documentElement.getAttribute('lang') || 'ar';
      this.clock = new THREE.Clock();
      this.raycaster = new THREE.Raycaster();
      this.mouseVec = new THREE.Vector2(-999, -999);

      this.setupScene();
      this.createCards();
      this.createParticles();
      this.bindEvents();
      this.animate();

      // Signal canvas ready and transition skeleton grid smoothly
      this.canvas.classList.add('is-ready');
      const sk = document.getElementById('scholarHeroSkeleton');
      if (sk) {
        sk.classList.add('is-hidden');
      }
    },

    setupScene() {
      const width = this.container.clientWidth || 580;
      const height = this.container.clientHeight || 500;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      this.updateCameraDistance(width);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      if (THREE.ACESFilmicToneMapping) {
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
      }

      // Photographic High-Fidelity Studio Lighting
      const ambient = new THREE.AmbientLight(0xffffff, 0.95);
      this.scene.add(ambient);

      const keyLight = new THREE.DirectionalLight(0xffffff, 0.72);
      keyLight.position.set(2, 5, 5);
      this.scene.add(keyLight);

      const warmRimLight = new THREE.PointLight(0xd4af37, 0.6, 14);
      warmRimLight.position.set(3.5, -2, 2.5);
      this.scene.add(warmRimLight);

      this.cardGroup = new THREE.Group();
      this.scene.add(this.cardGroup);
    },

    updateCameraDistance(width) {
      if (!this.camera) return;
      if (width < 380) {
        this.camera.position.set(0, 0, 6.4);
      } else if (width < 480) {
        this.camera.position.set(0, 0, 5.9);
      } else if (width < 768) {
        this.camera.position.set(0, 0, 5.5);
      } else if (width < 1024) {
        this.camera.position.set(0, 0, 5.2);
      } else {
        this.camera.position.set(0, 0, 4.9);
      }
    },

    drawRoundRectPath(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    },

    createCardTexture(service, lang) {
      const w = 1024;
      const h = 1440;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // 1. SOLID LUXURY ROYAL NAVY BASE
      ctx.fillStyle = service.primary;
      ctx.fillRect(0, 0, w, h);

      // 2. PRESTIGIOUS CHAMPAGNE GOLD DOUBLE FRAME INSET
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#C5A059';
      this.drawRoundRectPath(ctx, 36, 36, w - 72, h - 72, 48);
      ctx.stroke();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#223E6C';
      this.drawRoundRectPath(ctx, 52, 52, w - 104, h - 104, 38);
      ctx.stroke();

      // Four Corner Accents
      const corners = [
        { x: 56, y: 56 },
        { x: w - 56, y: 56 },
        { x: 56, y: h - 56 },
        { x: w - 56, y: h - 56 }
      ];
      ctx.fillStyle = '#C5A059';
      corners.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. TOP RIBBON PILL
      this.drawRoundRectPath(ctx, 110, 80, w - 220, 58, 29);
      ctx.fillStyle = '#142542';
      ctx.fill();
      ctx.strokeStyle = '#223E6C';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#E2E8F0';
      ctx.font = '700 23px Alexandria, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? 'SCHOLAR ACADEMIC LIBRARY • OFFICIAL SERVICE' : 'مكتبة سكولار الأكاديمية • خدمة رسمية معتمدة', w / 2, 117);

      // 4. SERVICE NUMBER & SPEC INDEX
      ctx.font = '700 21px Alexandria, Outfit, sans-serif';
      ctx.fillStyle = '#C5A059';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? (service.tagEn || '// ACADEMIC SERVICE SPECIFICATION') : (service.tagAr || '// مواصفات الخدمة الأكاديمية الرسمية'), w / 2, 185);

      // 5. MAIN SERVICE TITLE (MAJESTIC EDITORIAL TYPOGRAPHY)
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '800 48px Alexandria, Cairo, sans-serif';
      ctx.fillText(lang === 'en' ? service.nameEn : service.nameAr, w / 2, 245);

      ctx.fillStyle = '#FEF08A';
      ctx.font = '600 30px Alexandria, Cairo, sans-serif';
      ctx.fillText(lang === 'en' ? service.subEn : service.subAr, w / 2, 305);

      // 6. HAIRLINE ACCENT DIVIDER WITH DIAMOND
      ctx.strokeStyle = '#203B64';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(110, 345);
      ctx.lineTo(470, 345);
      ctx.moveTo(554, 345);
      ctx.lineTo(w - 110, 345);
      ctx.stroke();

      ctx.font = '22px sans-serif';
      ctx.fillStyle = '#C5A059';
      ctx.fillText('✦', w / 2, 353);

      // 7. HIGHLIGHT BADGE PILL
      this.drawRoundRectPath(ctx, 90, 380, w - 180, 68, 34);
      ctx.fillStyle = '#102038';
      ctx.fill();
      ctx.strokeStyle = '#C5A059';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#FEF08A';
      ctx.font = '700 26px Alexandria, Cairo, sans-serif';
      ctx.fillText(lang === 'en' ? service.badgeEn : service.badgeAr, w / 2, 423);

      // 8. THREE STRUCTURED SOLID SPECIFICATION BOXES (NO LOGOS, ONLY NOBLE TEXT)
      // Box 1: Academic Scope
      this.drawRoundRectPath(ctx, 90, 480, w - 180, 180, 20);
      ctx.fillStyle = '#0E1B32';
      ctx.fill();
      ctx.strokeStyle = '#203A63';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#C5A059';
      this.drawRoundRectPath(ctx, 90, 480, 8, 180, 4);
      ctx.fill();

      ctx.fillStyle = '#C5A059';
      ctx.font = '700 24px Alexandria, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? '• ACADEMIC SCOPE & UNIVERSITY GUIDELINES •' : '• نطاق العمل والمواءمة مع دليل الجامعة •', w / 2, 530);

      ctx.fillStyle = '#F1F5F9';
      ctx.font = '500 25px Alexandria, sans-serif';
      ctx.fillText(lang === 'en' ? service.scopeEn : service.scopeAr, w / 2, 595);

      // Box 2: Deliverables & Readiness
      this.drawRoundRectPath(ctx, 90, 690, w - 180, 180, 20);
      ctx.fillStyle = '#0E1B32';
      ctx.fill();
      ctx.strokeStyle = '#203A63';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#38BDF8';
      this.drawRoundRectPath(ctx, 90, 690, 8, 180, 4);
      ctx.fill();

      ctx.fillStyle = '#38BDF8';
      ctx.font = '700 24px Alexandria, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? '• DELIVERABLES & FORMAT READINESS •' : '• صيغ التسليم والجاهزية الفورية للمناقشة •', w / 2, 740);

      ctx.fillStyle = '#F1F5F9';
      ctx.font = '500 25px Alexandria, sans-serif';
      ctx.fillText(lang === 'en' ? service.statsEn : service.statsAr, w / 2, 805);

      // Box 3: Academic Integrity Charter
      this.drawRoundRectPath(ctx, 90, 900, w - 180, 180, 20);
      ctx.fillStyle = '#0E1B32';
      ctx.fill();
      ctx.strokeStyle = '#203A63';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#10B981';
      this.drawRoundRectPath(ctx, 90, 900, 8, 180, 4);
      ctx.fill();

      ctx.fillStyle = '#34D399';
      ctx.font = '700 24px Alexandria, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? '• SCIENTIFIC INTEGRITY & ETHICAL CHARTER •' : '• ميثاق الأمانة والنزاهة العلمية •', w / 2, 950);

      ctx.fillStyle = '#F1F5F9';
      ctx.font = '500 25px Alexandria, sans-serif';
      ctx.fillText(lang === 'en' ? (service.charterEn || 'Customized for researchers • No ready-made research') : (service.charterAr || 'أعمال أصلية موثقة بجهد الباحث • لا بحوث جاهزة إطلاقاً'), w / 2, 1015);

      // 9. BOTTOM VERIFICATION BAR
      this.drawRoundRectPath(ctx, 90, 1110, w - 180, 130, 26);
      ctx.fillStyle = '#142542';
      ctx.fill();
      ctx.strokeStyle = '#223E6C';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.font = '700 26px Alexandria, sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? 'RAPID TURNAROUND • HIGH PRECISION' : 'سرعة فائقة في الإنجاز • دقة أكاديمية متناهية', w / 2, 1162);

      ctx.font = '500 22px Alexandria, Outfit, sans-serif';
      ctx.fillStyle = '#94A3B8';
      ctx.fillText(lang === 'en' ? 'Continuous follow-up until official defense' : 'متابعة وتعديلات مستمرة حتى إقرار العمل والمناقشة', w / 2, 1206);

      // 10. FOOTER MICRO-SEAL
      ctx.font = '600 20px Alexandria, monospace';
      ctx.fillStyle = '#64748B';
      ctx.fillText(lang === 'en' ? 'VERIFIED SCHOLAR SERVICE • READY FOR DISPATCH' : 'خدمة أكاديمية موثقة • جاهزة للتحويل المباشر والمتابعة', w / 2, 1295);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      if (this.renderer && this.renderer.capabilities) {
        texture.anisotropy = Math.min(this.renderer.capabilities.getMaxAnisotropy(), 16);
      }
      return texture;
    },

    createCards() {
      while (this.cardGroup.children.length > 0) {
        const obj = this.cardGroup.children[0];
        this.cardGroup.remove(obj);
      }
      this.cards = [];

      const geom = new THREE.BoxGeometry(2.2, 3.1, 0.06);

      // Metallic Champagne Gold Edges (Eliminates black borders!)
      const edgeMat = new THREE.MeshStandardMaterial({
        color: 0xC5A059,
        metalness: 0.92,
        roughness: 0.22
      });

      // Deep Oxford Slate Backing
      const backMat = new THREE.MeshStandardMaterial({
        color: 0x0A1322,
        metalness: 0.55,
        roughness: 0.38
      });

      this.services.forEach((service, idx) => {
        const frontTex = this.createCardTexture(service, this.currentLang);

        const frontMat = new THREE.MeshStandardMaterial({
          map: frontTex,
          metalness: 0.05,
          roughness: 0.55
        });

        const materials = [edgeMat, edgeMat, edgeMat, edgeMat, frontMat, backMat];

        const cardMesh = new THREE.Mesh(geom, materials);
        cardMesh.userData = {
          index: idx,
          serviceId: service.id,
          targetPos: { x: 0, y: 0, z: 0 },
          targetRot: { x: 0, y: 0, z: 0 },
          targetScale: 1.0,
          phase: idx * 2.1
        };

        this.cardGroup.add(cardMesh);
        this.cards.push(cardMesh);
      });

      this.updateCardTargets();
      this.cards.forEach(card => {
        card.position.set(card.userData.targetPos.x, card.userData.targetPos.y, card.userData.targetPos.z);
        card.rotation.set(card.userData.targetRot.x, card.userData.targetRot.y, card.userData.targetRot.z);
        card.scale.setScalar(card.userData.targetScale);
      });
    },

    updateCardTargets() {
      const active = this.activeIndex;
      this.cards.forEach((card, idx) => {
        const u = card.userData;
        if (idx === active) {
          // Center Stage Focus
          u.targetPos = { x: 0, y: 0.02, z: 0.65 };
          u.targetRot = { x: 0, y: 0, z: 0 };
          u.targetScale = 1.05;
        } else {
          let offset = idx - active;
          if (offset < -1) offset += 3;
          if (offset > 1) offset -= 3;

          if (offset < 0) {
            u.targetPos = { x: -1.82, y: 0.1, z: -0.18 };
            u.targetRot = { x: 0.02, y: 0.30, z: 0.02 };
            u.targetScale = 0.88;
          } else {
            u.targetPos = { x: 1.82, y: -0.1, z: -0.18 };
            u.targetRot = { x: -0.02, y: -0.30, z: -0.02 };
            u.targetScale = 0.88;
          }
        }
      });
    },

    setActiveService(index) {
      if (index < 0 || index >= this.services.length || index === this.activeIndex) return;
      this.activeIndex = index;
      this.updateCardTargets();
    },

    setActiveUniversity(index) {
      this.setActiveService(index);
    },

    createParticles() {
      const count = 60;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      }
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xC5A059,
        size: 0.045,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending
      });
      this.particles = new THREE.Points(geom, mat);
      this.scene.add(this.particles);
    },

    bindEvents() {
      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let deltaX = 0;
      let deltaY = 0;

      const onPointerDown = (e) => {
        isDragging = true;
        const pt = e.touches ? e.touches[0] : e;
        startX = pt.clientX;
        startY = pt.clientY;
        deltaX = 0;
        deltaY = 0;
      };

      const onPointerMove = (e) => {
        const rect = this.container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const pt = e.touches ? e.touches[0] : e;
        const clientX = pt.clientX;
        const clientY = pt.clientY;

        this.pointer.targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        this.mouseVec.x = this.pointer.targetX;
        this.mouseVec.y = this.pointer.targetY;

        if (isDragging) {
          deltaX = clientX - startX;
          deltaY = clientY - startY;
        }
      };

      const onPointerUp = () => {
        if (!isDragging) return;
        isDragging = false;

        // Slide Gesture Detection: Drag threshold > 40px
        if (Math.abs(deltaX) > 40) {
          if (deltaX > 0) {
            // Drag right -> previous card
            const prevIndex = (this.activeIndex + 2) % 3;
            this.setActiveService(prevIndex);
          } else {
            // Drag left -> next card
            const nextIndex = (this.activeIndex + 1) % 3;
            this.setActiveService(nextIndex);
          }
        } else if (Math.hypot(deltaX, deltaY) < 14) {
          // Tap / Click Gesture on side cards
          if (this.hoveredIndex >= 0 && this.hoveredIndex !== this.activeIndex) {
            this.setActiveService(this.hoveredIndex);
          }
        }
        deltaX = 0;
        deltaY = 0;
      };

      this.container.addEventListener('mousedown', onPointerDown);
      this.container.addEventListener('mousemove', onPointerMove, { passive: true });
      window.addEventListener('mouseup', onPointerUp);

      this.container.addEventListener('touchstart', onPointerDown, { passive: true });
      this.container.addEventListener('touchmove', onPointerMove, { passive: true });
      this.container.addEventListener('touchend', onPointerUp, { passive: true });

      this.container.addEventListener('mouseleave', () => {
        this.pointer.targetX = 0;
        this.pointer.targetY = 0;
        this.mouseVec.x = -999;
        this.mouseVec.y = -999;
        this.hoveredIndex = -1;
      });

      window.addEventListener('resize', () => {
        if (!this.container || !this.renderer || !this.camera) return;
        const w = this.container.clientWidth;
        const h = this.container.clientHeight;
        if (w === 0 || h === 0) return;
        this.camera.aspect = w / h;
        this.updateCameraDistance(w);
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      });

      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            this.isVisible = entry.isIntersecting;
          });
        }, { threshold: 0.1 });
        obs.observe(this.container);
      }
    },

    updateLanguage(lang) {
      this.currentLang = lang;
      if (this.cards.length > 0) {
        this.createCards();
      }
    },

    animate() {
      this.animFrameId = requestAnimationFrame(() => this.animate());
      if (!this.isVisible || !this.renderer || !this.scene || !this.camera) return;

      const elapsed = this.clock.getElapsedTime();

      this.pointer.x += (this.pointer.targetX - this.pointer.x) * 0.045;
      this.pointer.y += (this.pointer.targetY - this.pointer.y) * 0.045;

      if (this.cardGroup) {
        this.cardGroup.rotation.y = this.pointer.x * 0.22;
        this.cardGroup.rotation.x = -this.pointer.y * 0.15;
      }

      if (this.raycaster && this.cards.length > 0 && this.mouseVec.x > -100) {
        this.raycaster.setFromCamera(this.mouseVec, this.camera);
        const intersects = this.raycaster.intersectObjects(this.cards);
        if (intersects.length > 0) {
          this.hoveredIndex = intersects[0].object.userData.index;
        } else {
          this.hoveredIndex = -1;
        }
      }

      this.cards.forEach((card, idx) => {
        const u = card.userData;
        const isHovered = this.hoveredIndex === idx && idx !== this.activeIndex;
        const isActive = this.activeIndex === idx;

        const floatY = Math.sin(elapsed * 1.5 + u.phase) * (isActive ? 0.04 : 0.06);
        const floatZ = Math.cos(elapsed * 1.2 + u.phase) * (isActive ? 0.02 : 0.03);

        const goalX = u.targetPos.x;
        const goalY = u.targetPos.y + floatY;
        const goalZ = u.targetPos.z + floatZ + (isHovered ? 0.22 : 0);
        const goalScale = (isHovered ? u.targetScale * 1.03 : u.targetScale);

        card.position.x += (goalX - card.position.x) * 0.085;
        card.position.y += (goalY - card.position.y) * 0.085;
        card.position.z += (goalZ - card.position.z) * 0.085;

        card.rotation.x += (u.targetRot.x - card.rotation.x) * 0.085;
        card.rotation.y += (u.targetRot.y - card.rotation.y) * 0.085;
        card.rotation.z += (u.targetRot.z - card.rotation.z) * 0.085;

        card.scale.x += (goalScale - card.scale.x) * 0.085;
        card.scale.y += (goalScale - card.scale.y) * 0.085;
        card.scale.z += (goalScale - card.scale.z) * 0.085;
      });

      if (this.particles) {
        this.particles.rotation.y = elapsed * 0.025;
        this.particles.rotation.x = elapsed * 0.012;
      }

      this.renderer.render(this.scene, this.camera);
    }
  };

  // Backwards compatibility alias
  const ScholarUniversities3D = ScholarServices3D;

  /* --------------------------------------------------------------------------
     9. SKELETON VIEW CONTROLLER (Smooth Shimmer & Seamless Dismissal)
     -------------------------------------------------------------------------- */
  const ScholarSkeleton = {
    init() {
      const sk = document.getElementById('scholarSkeleton');
      if (!sk) return;
      const dismiss = () => {
        sk.classList.add('is-loaded');
        setTimeout(() => {
          if (sk.parentNode) sk.remove();
        }, 450);
      };
      // Allow brief moment for smooth visual shimmer then dismiss
      if (document.readyState === 'complete') {
        setTimeout(dismiss, 350);
      } else {
        window.addEventListener('load', () => setTimeout(dismiss, 350));
        // Fallback safety timeout in case assets take longer
        setTimeout(dismiss, 950);
      }
    }
  };

  /* --------------------------------------------------------------------------
     10. DOM INITIALIZATION
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    ScholarSkeleton.init();
    ScholarStore.init();
    ScholarI18n.init();
    ScholarUniversities3D.init();
    ScholarMobileMenu.init();
    ScholarMarquee.init();
    ScholarReferral.init();
    ScholarFaq.init();
    ScholarFloatingBar.init();
    ScholarMotion.init();
    console.log('[Scholar Academic Library - مكتبة سكولار الأكاديمية] Fully initialized with Alexandria Font, 3D Iraqi Universities, and Atmospheric Royal Navy.');
  });

})();

