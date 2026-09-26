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
        page_title: 'مكتبة سكولار الأكاديمية | Scholar Academic Library — لإنشاء البحوث والرسائل والتقارير',
        nav_about: 'من نحن',
        nav_services: 'خدماتنا',
        nav_guarantees: 'ضمانات العمل',
        nav_order: 'تحويل طلبك',
        nav_faq: 'الأسئلة الشائعة',
        nav_cta: 'تحويل طلب سريع',
        lang_btn_text: 'English',
        lang_btn_title: 'التبديل إلى English',
        hero_est: 'خدمات أكاديمية متخصصة • للجامعات والمعاهد والدراسات العليا',
        hero_title_1: 'مكتبة سكولار',
        hero_title_2: 'الأكاديمية',
        hero_sub_heading: '<span class="scholar-fw-bold">لإنشاء البحوث والرسائل والتقارير</span>',
        hero_sub: 'فريق متخصص في إعداد وتنسيق بحوث تخرج البكالوريوس، رسائل الماجستير، والتقارير الأكاديمية بدقة عالية وسرعة تسليم متميزة مع متابعة مستمرة لكافة الملاحظات.',
        hero_btn_order: 'تحويل طلبك مباشرة إلى واتساب',
        hero_btn_about: 'تعرف على فريقنا وضماناتنا',
        trust_iraq: 'دليل الجامعات العراقية',
        trust_speed: 'تسليم سريع وضمان دقة',
        trust_docs: 'صيغتي Word & PDF',
        three_caption: 'صروح أكاديمية معتمدة • جامعة بغداد • المستنصرية • بابل',
        three_hint: 'حرّك الماوس للتفاعل 3D',
        services_title_bold: 'خدماتنا',
        services_desc: 'فريقنا مختص وسريع الاستجابة، يقدم دعما عمليا وموثوقا في كتابة وتطوير الأبحاث، إعداد الرسائل الجامعية، ومراجعة وتنسيق المتطلبات بدقة عالية.',
        guarantees_title_thin: 'ضمانات',
        guarantees_title_bold: 'العمل',
        guarantees_sub: 'نلتزم بأعلى معايير الإتقان الأكاديمي والسرعة العالية لتسليم أبحاث ورسائل رصينة جاهزة للمناقشة.',
        g1_title: 'تسليم بسرعة عالية',
        g1_sub: 'سرعة في الإنجاز والتسليم',
        g2_title: 'مراجعة مستمرة',
        g2_sub: 'تواصل منتظم وتعديلات مستمرة',
        g3_title: 'دقة عالية',
        g3_sub: 'دقة في الكتابة والاستناد على المصادر والبحوث الموثوقة',
        about_badge: 'من نحن • About Us',
        about_heading_bold: 'فريق أكاديمي',
        about_heading_thin: 'متخصص ومتكامل',
        about_exact_statement: 'نحن فريق مختص في الخدمات الأكاديمية في الجامعات والمعاهد من انشاء وتعديل ومتابعة للبحوث والرسائل والتقارير، وما يميزنا السرعة في التسليم ومتابعة الملاحظات',
        word_desc: 'صيغة محررة بالكامل وقابلة للتعديل مع ضبط الهوامش وأنماط الخطوط المعتمدة لكلية الطالب.',
        pdf_desc: 'نسخة نهائية موثقة وجاهزة للطباعة والمناقشة الفورية مع ثبات الفهارس والجداول والمراجع.',
        docs_seal_text: 'تسليم بصيغتي Word و PDF معاً في كل عمل أكاديمي لضمان الراحة التامة للمناقشة والمراجعة',
        order_title_thin: 'تحويل',
        order_title_bold: 'طلبك مباشرة',
        order_desc: 'املأ المعلومات الأساسية أدناه وسيتم تحويل طلبك مباشرة إلى واتساب أو تليغرام المكتبة للتواصل الفوري مع المستشار الأكاديمي.',
        label_name: 'الاسم أو اللقب (اختياري)',
        ph_name: 'مثال: علي العراقي',
        label_degree: 'المرحلة / الدرجة العلمية',
        chip_quick: 'اختيار سريع:',
        opt_master: 'رسائل ماجستير',
        opt_bachelor: 'بحوث بكالوريوس',
        opt_reports: 'تقارير',
        opt_other: 'أخرى (ملخص أو خدمة أكاديمية)',
        chip_master: 'رسائل ماجستير',
        chip_bachelor: 'بحوث بكالوريوس',
        chip_reports: 'تقارير',
        chip_other: 'أخرى',
        label_univ: 'الجامعة والكلية',
        ph_univ: 'اكتب اسم جامعتك وكليتك (مثال: جامعة بغداد / كلية الإدارة والاقتصاد)',
        label_topic: 'عنوان الدراسة أو فكرة البحث / الملخص',
        ph_topic: 'اكتب هنا عنوان دراستك، فكرة البحث، أو ملخص ما تحتاجه بدقة...',
        label_notes: 'ملاحظات أو موعد التسليم المطلوب',
        ph_notes: 'مثال: موعد التسليم المطلوب، تفاصيل محددة، أو تعديلات مخصصة...',
        preview_title: 'معاينة مباشرة للرسالة المجهزة للمستشار الأكاديمي:',
        btn_copy: '📋 نسخ نص الرسالة',
        btn_send_wa: 'تحويل مباشر عبر WhatsApp',
        btn_send_tg: 'تحويل عبر Telegram (@MarwanAIDev)',
        order_notice: '🔒 سيتم فتح المحادثة مباشرة مع مستشارك الأكاديمي مع رسالة منظمة بالبيانات أعلاه لمتابعة العمل فوراً.',
        faq_badge: 'إجابات شافية ووضوح أكاديمي',
        faq_title_thin: 'الأسئلة',
        faq_title_bold: 'الشائعة',
        faq_desc: 'إجابات مباشرة عن أهم الأسئلة والضوابط التي تهم الباحثين وطلبة الدراسات العليا والأولية في الجامعات العراقية.',
        faq_q1: 'ما هي المدة المستغرقة لإنجاز وتسليم البحث أو الرسالة؟',
        faq_a1: 'نتميز بالسرعة العالية في التنفيذ والالتزام الصارم بالمواعيد المتفق عليها، مع توفير إمكانية التسليم العاجل للتقارير والبحوث، وتسليم فصلي متدرج لرسائل الماجستير يتيح لك مراجعتها مع المشرف خطوة بخطوة.',
        faq_q2: 'هل تلتزمون بدليل كتابة الرسائل والأطاريح المعتمد في كليتي وجامعتي؟',
        faq_a2: 'نعم، التزاما تاما. نطبق هوامش الصفحات، قياسات الخطوط المعتمدة، ترقيم الأبواب والفصول، وأنظمة التوثيق الرسمية بدقة مطابقة لدليل جامعتك وكليتك دون أي خلل شكلي.',
        faq_q3: 'هل تشمل الخدمة مراجعة وتعديلات مستمرة بعد التسليم؟',
        faq_a3: 'نعم بالتأكيد، نقدم مراجعة وتعديلات مستمرة على العمل حتى بعد تسليمه لتطبيق كافة توجيهات الأستاذ المشرف وملاحظات القسم دون أي تأخير أو تعقيد.',
        faq_q4: 'ما هي نوعية الأعمال والخدمات الأكاديمية المتاحة لديكم؟',
        faq_a4: 'نوفر إعداد وتنسيق رسائل الماجستير، بحوث تخرج البكالوريوس، التقارير والواجبات الدراسية، إعداد وتلخيص المواد العلمية، والتحليل الإحصائي لمختلف التخصصات العلمية والإنسانية.',
        faq_q5: 'كيف يتم التواصل والتعامل المالي في العراق؟',
        faq_a5: 'التواصل فوري ومباشر عبر تليغرام (@MarwanAIDev) أو عبر WhatsApp. والتعاملات المالية متوفرة بأقساط مرحلية ميسرة عبر المحافظ الإلكترونية أو الحوالات المحلية، بما يلائم جميع الطلبة والباحثين في كافة المحافظات العراقية.',
        footer_brand_title_thin: 'مكتبة سكولار',
        footer_brand_title_bold: 'الأكاديمية',
        footer_brand_sub: 'Scholar Academic Library • دعم بحوث التخرج والدراسات العليا في العراق',
        footer_rights: '© 2026 مكتبة سكولار الأكاديمية (Scholar Academic Library). جميع الحقوق محفوظة لطلبة وباحثي الجامعات العراقية.',
        footer_compliance: 'التزام كامل بضوابط وتعليمات وزارة التعليم العالي والبحث العلمي',
        footer_wa: 'تواصل واتساب'
      },
      en: {
        page_title: 'Scholar Academic Library | Research Writing, Master Theses & Academic Reports',
        nav_about: 'About Us',
        nav_services: 'Services',
        nav_guarantees: 'Guarantees',
        nav_order: 'Direct Referral',
        nav_faq: 'FAQ',
        nav_cta: 'Quick Referral',
        lang_btn_text: 'العربية',
        lang_btn_title: 'Switch to Arabic',
        hero_est: 'Specialized Academic Services • For Universities & Graduate Studies',
        hero_title_1: 'Scholar',
        hero_title_2: 'Academic Library',
        hero_sub_heading: '<span class="scholar-fw-bold">Researches, Theses & Academic Reports</span>',
        hero_sub: 'A specialized team dedicated to preparing and formatting Bachelor graduation research, Master theses, and academic reports with high precision, rapid turnaround, and continuous revision.',
        hero_btn_order: 'Transfer Request via WhatsApp',
        hero_btn_about: 'Meet Our Team & Guarantees',
        trust_iraq: 'Iraqi Universities Standards',
        trust_speed: 'Rapid Turnaround & Rigor',
        trust_docs: 'Word & PDF Formats Included',
        three_caption: 'Accredited Iraqi Universities • Baghdad • Mustansiriyah • Babylon',
        three_hint: 'Move cursor to interact in 3D',
        services_title_bold: 'Services',
        services_desc: 'Our specialized, fast-response team of experts provides reliable academic support in research writing, thesis development, and meticulous formatting conforming to high standards.',
        guarantees_title_thin: 'Our Work',
        guarantees_title_bold: 'Guarantees',
        guarantees_sub: 'We adhere to rigorous academic standards and rapid execution to deliver well-researched, defense-ready dissertations and projects.',
        g1_title: 'High-Speed Delivery',
        g1_sub: 'Rapid execution and timely completion',
        g2_title: 'Continuous Revision',
        g2_sub: 'Regular communication and seamless edits',
        g3_title: 'High Precision',
        g3_sub: 'Meticulous writing grounded in reliable scholarly sources',
        about_badge: 'About Us • Mission',
        about_heading_bold: 'Dedicated Academic',
        about_heading_thin: 'Team & Mentors',
        about_exact_statement: 'We are a specialized team in academic services across universities and institutes, dedicated to creating, revising, and following up on research, theses, and reports. What distinguishes us is our rapid delivery and meticulous response to advisor feedback.',
        word_desc: 'Fully editable format with custom margins, typography, and citation styles tailored to your college manual.',
        pdf_desc: 'Print-ready, fixed-layout document ideal for immediate defense, preserving tables, charts, and indices.',
        docs_seal_text: 'Both Word and PDF formats are delivered together for every academic project for effortless review and defense',
        order_title_thin: 'Direct',
        order_title_bold: 'Project Referral',
        order_desc: 'Enter your project parameters to generate a pre-formatted, structured request sent directly to your consultant on WhatsApp or Telegram.',
        label_name: 'Researcher Name / Pseudonym (Optional)',
        ph_name: 'e.g. Ali Al-Iraqi',
        label_degree: 'Academic Degree / Level',
        chip_quick: 'Quick Select:',
        opt_master: "Master's Thesis",
        opt_bachelor: "Bachelor's Research",
        opt_reports: 'Academic Reports',
        opt_other: 'Other (Summary or Scholarly Service)',
        chip_master: "Master's Theses",
        chip_bachelor: "Bachelor's",
        chip_reports: 'Reports',
        chip_other: 'Other',
        label_univ: 'University & College',
        ph_univ: 'Enter your university and college (e.g. University of Baghdad / Business)',
        label_topic: 'Study Title, Research Idea, or Project Summary',
        ph_topic: 'Type your research topic, study concept, or project requirements...',
        label_notes: 'Notes & Expected Delivery Date',
        ph_notes: 'e.g. Deadline in 2 weeks, specific guidelines, or milestone checks...',
        preview_title: 'Live Preview of Message to Academic Consultant:',
        btn_copy: '📋 Copy Message Text',
        btn_send_wa: 'Direct Transfer via WhatsApp',
        btn_send_tg: 'Direct Transfer via Telegram (@MarwanAIDev)',
        order_notice: '🔒 The conversation will open directly with your academic consultant with the structured request above.',
        faq_badge: 'Academic Guidance & Clarity',
        faq_title_thin: 'Frequently Asked',
        faq_title_bold: 'Questions',
        faq_desc: 'Direct, clear answers regarding academic regulations, turnaround times, revisions, and coordination in Iraq.',
        faq_q1: 'What is the turnaround time for completing and delivering research or a thesis?',
        faq_a1: 'We pride ourselves on high-speed execution and strict adherence to agreed deadlines, offering expedited turnaround for urgent reports and papers, as well as milestone chapter-by-chapter submissions for Master theses to facilitate step-by-step review with your supervisor.',
        faq_q2: 'Do you strictly follow the thesis manual and formatting guidelines approved by my university and college?',
        faq_a2: 'Yes, with 100% compliance. We rigorously format page margins, official university font sizes, chapter headings, and approved reference documentation styles matching your university and college guidelines without any discrepancy.',
        faq_q3: 'Does the service include continuous revisions and modifications after initial delivery?',
        faq_a3: 'Yes, absolutely. We provide comprehensive continuous revisions and edits on the work even after delivery to implement all directives from your supervising professor and departmental committee without delay.',
        faq_q4: 'What types of academic research works and services are available?',
        faq_a4: 'We offer comprehensive writing, editing, and formatting of Master theses, Bachelor graduation projects, term reports, literature summaries, and SPSS statistical analysis across scientific, engineering, medical, legal, and humanities disciplines.',
        faq_q5: 'How is coordination and financial payment handled in Iraq?',
        faq_a5: 'Communication is direct and immediate via Telegram (@MarwanAIDev) or WhatsApp. Financial transactions are available in convenient milestone installments through e-wallets or local bank transfers across all Iraqi governorates.',
        footer_brand_title_thin: 'Scholar',
        footer_brand_title_bold: 'Academic Library',
        footer_brand_sub: 'Scholar Academic Library • Undergraduate & Graduate Research Support',
        footer_rights: '© 2026 Scholar Academic Library. All rights reserved for Iraqi scholars and university students.',
        footer_compliance: 'Full compliance with institutional and higher education research standards',
        footer_wa: 'Contact via WhatsApp'
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
      const degree = degEl ? degEl.options[degEl.selectedIndex]?.text : (isEn ? "Master's Theses" : 'رسائل ماجستير');
      const university = document.getElementById('refUniversity')?.value.trim() || (isEn ? 'University / College' : 'جامعة / كلية');
      const topic = document.getElementById('refTopic')?.value.trim() || (isEn ? 'Requesting research consultation & proposal' : 'طلب إعداد / استشارة أكاديمية');
      const notes = document.getElementById('refNotes')?.value.trim() || (isEn ? 'Please provide the milestones and turnaround time' : 'يرجى تزويدي بالتفاصيل وموعد الإنجاز المتاح');

      return { studentName, degree, university, topic, notes };
    },

    formatMessage(data) {
      const isEn = ScholarI18n.currentLang === 'en';
      if (isEn) {
        return (
          `Hello,\n` +
          `I would like to inquire and coordinate an academic project with Scholar Electronic Library:\n\n` +
          `🎓 *Project Type / Level:* ${data.degree}\n` +
          `🏛️ *University & College:* ${data.university}\n` +
          `📖 *Topic / Project Summary:* ${data.topic}\n` +
          `📝 *Notes & Expected Delivery:* ${data.notes}\n` +
          `👤 *Researcher Name:* ${data.studentName}\n\n` +
          `Please provide me with available milestones and details. Thank you.`
        );
      } else {
        return (
          `السلام عليكم ورحمة الله،\n` +
          `أود التنسيق والاستفسار بخصوص عمل أكاديمي لدى مكتبة سكولار الإلكترونية:\n\n` +
          `🎓 *نوع العمل / الدرجة:* ${data.degree}\n` +
          `🏛️ *الجامعة والكلية:* ${data.university}\n` +
          `📖 *عنوان أو فكرة البحث / الملخص:* ${data.topic}\n` +
          `📝 *ملاحظات وموعد التسليم:* ${data.notes}\n` +
          `👤 *اسم الباحث:* ${data.studentName}\n\n` +
          `يرجى موافاتي بالتفاصيل والمسار المتاح للمتابعة، مع جزيل الشكر والتقدير.`
        );
      }
    },

    updateLivePreview() {
      const previewBox = document.getElementById('liveMessagePreview');
      if (!previewBox) return;
      const data = this.getFormData();
      previewBox.textContent = this.formatMessage(data);
    },

    copyPreview(btn) {
      const isEn = ScholarI18n.currentLang === 'en';
      const data = this.getFormData();
      const msg = this.formatMessage(data);
      navigator.clipboard.writeText(msg).then(() => {
        const originalText = btn.textContent;
        btn.textContent = isEn ? '✓ Copied to Clipboard!' : '✓ تم النسخ للحافظة!';
        btn.style.color = 'var(--scholar-royal-blue)';
        btn.style.borderColor = 'var(--scholar-royal-blue)';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(() => {
        btn.textContent = isEn ? '✓ Copied!' : '✓ نُسخ!';
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
     8. SCHOLAR UNIVERSITIES 3D EXPERIENCE (THREE.JS BESPOKE CARDS)
     -------------------------------------------------------------------------- */
  const ScholarUniversities3D = {
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

    universities: [
      {
        id: 'baghdad',
        nameAr: 'جامعة بغداد',
        nameEn: 'University of Baghdad',
        titleAr: 'أم الجامعات العراقية',
        titleEn: 'Mother of Iraqi Universities',
        yearAr: 'تأسست ١٩٥٧ م',
        yearEn: 'Established 1957',
        badgeAr: 'الريادة والاعتماد الأكاديمي الشامل',
        badgeEn: 'Pioneering Comprehensive Accreditation',
        statsAr: '٢٤ كلية و٤ معاهد عليا متخصصة',
        statsEn: '24 Colleges & 4 Specialized Institutes',
        primary: '#132C54',
        secondary: '#C5A059',
        accent: '#93C5FD',
        basePos: { x: 0.12, y: 0.05, z: 0.55 },
        baseRot: { x: 0.03, y: -0.14, z: -0.01 },
        iconType: 'tower'
      },
      {
        id: 'mustansiriyah',
        nameAr: 'الجامعة المستنصرية',
        nameEn: 'Mustansiriyah University',
        titleAr: 'إرث الحضارة والتاريخ',
        titleEn: 'Heritage of Civilization & History',
        yearAr: 'تأسست ١٢٢٧ م',
        yearEn: 'Established 1227 AD',
        badgeAr: 'أعرق الصروح العلمية التاريخية',
        badgeEn: 'Historic Anchor of Academic Excellence',
        statsAr: '١٣ كلية ومراكز بحثية عريقة',
        statsEn: '13 Colleges & Historical Research Centers',
        primary: '#092E42',
        secondary: '#2DD4BF',
        accent: '#67E8F9',
        basePos: { x: -1.78, y: 0.38, z: -0.15 },
        baseRot: { x: 0.02, y: 0.28, z: 0.02 },
        iconType: 'arch'
      },
      {
        id: 'babylon',
        nameAr: 'جامعة بابل',
        nameEn: 'University of Babylon',
        titleAr: 'درة الفرات الأوسط',
        titleEn: 'Pearl of Middle Euphrates',
        yearAr: 'تأسست ١٩٩١ م',
        yearEn: 'Established 1991',
        badgeAr: 'صدارة التصنيفات العالمية للبحث',
        badgeEn: 'Leading Global Research Rankings',
        statsAr: '٢٠ كلية وبرامج دراسات عليا رصينة',
        statsEn: '20 Colleges & Rigorous Graduate Programs',
        primary: '#14253F',
        secondary: '#F59E0B',
        accent: '#FDE68A',
        basePos: { x: 1.88, y: -0.36, z: -0.38 },
        baseRot: { x: -0.03, y: -0.32, z: -0.02 },
        iconType: 'gate'
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
        this.renderer.toneMappingExposure = 1.15;
      }

      // Lights
      const ambient = new THREE.AmbientLight(0xdbeafe, 0.85);
      this.scene.add(ambient);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
      dirLight.position.set(4, 6, 5);
      this.scene.add(dirLight);

      const sapphireLight = new THREE.PointLight(0x2563eb, 2.4, 18);
      sapphireLight.position.set(-3.5, -1, 3);
      this.scene.add(sapphireLight);

      const goldLight = new THREE.PointLight(0xc5a059, 1.8, 16);
      goldLight.position.set(3, -2, 3);
      this.scene.add(goldLight);

      this.cardGroup = new THREE.Group();
      this.scene.add(this.cardGroup);
    },

    updateCameraDistance(width) {
      if (!this.camera) return;
      if (width < 480) {
        this.camera.position.set(0, 0, 6.4);
      } else if (width < 768) {
        this.camera.position.set(0, 0, 5.8);
      } else {
        this.camera.position.set(0, 0, 5.2);
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

    createCardTexture(univ, lang) {
      const w = 768;
      const h = 1080;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      ctx.clearRect(0, 0, w, h);

      // Card body with luxury glassmorphic gradient
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, univ.primary);
      bgGrad.addColorStop(0.5, '#0B172E');
      bgGrad.addColorStop(1, '#050A14');
      ctx.fillStyle = bgGrad;
      this.drawRoundRectPath(ctx, 24, 24, w - 48, h - 48, 54);
      ctx.fill();

      // Dual metallic rim
      ctx.lineWidth = 4;
      ctx.strokeStyle = univ.secondary;
      this.drawRoundRectPath(ctx, 24, 24, w - 48, h - 48, 54);
      ctx.stroke();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      this.drawRoundRectPath(ctx, 36, 36, w - 72, h - 72, 44);
      ctx.stroke();

      // Subtle radial inner glow
      const innerGlow = ctx.createRadialGradient(w / 2, 280, 40, w / 2, 280, 360);
      innerGlow.addColorStop(0, 'rgba(37, 99, 235, 0.22)');
      innerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = innerGlow;
      this.drawRoundRectPath(ctx, 38, 38, w - 76, h - 76, 42);
      ctx.fill();

      // Top Republic Ribbon
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      this.drawRoundRectPath(ctx, 80, 60, w - 160, 48, 24);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 1;
      this.drawRoundRectPath(ctx, 80, 60, w - 160, 48, 24);
      ctx.stroke();

      ctx.fillStyle = '#E2E8F0';
      ctx.font = '600 20px Alexandria, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(lang === 'en' ? 'REPUBLIC OF IRAQ • MINISTRY OF HIGHER EDUCATION' : 'جمهورية العراق • وزارة التعليم العالي والبحث العلمي', w / 2, 92);

      // Central University Crest / Architectural Icon
      ctx.save();
      ctx.translate(w / 2, 300);

      // Crest Halo
      const halo = ctx.createRadialGradient(0, 0, 10, 0, 0, 140);
      halo.addColorStop(0, 'rgba(197, 160, 89, 0.3)');
      halo.addColorStop(1, 'transparent');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.fill();

      // Crest Circle
      ctx.strokeStyle = univ.secondary;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(0, 0, 105, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 94, 0, Math.PI * 2);
      ctx.stroke();

      // Architectural Vector Insignia
      ctx.strokeStyle = '#FFFFFF';
      ctx.fillStyle = univ.secondary;
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (univ.iconType === 'tower') {
        // Baghdad University Iconic Tower & Spire
        ctx.beginPath();
        ctx.moveTo(-50, 45);
        ctx.quadraticCurveTo(0, 55, 50, 45);
        ctx.lineTo(45, 62);
        ctx.quadraticCurveTo(0, 72, -45, 62);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-24, 45);
        ctx.lineTo(-14, -25);
        ctx.lineTo(14, -25);
        ctx.lineTo(24, 45);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-22, -25);
        ctx.lineTo(-34, -48);
        ctx.lineTo(34, -48);
        ctx.lineTo(22, -25);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -48);
        ctx.lineTo(0, -82);
        ctx.stroke();
      } else if (univ.iconType === 'arch') {
        // Mustansiriyah Historic Arched Iwan & Sunburst
        ctx.beginPath();
        ctx.moveTo(-45, 60);
        ctx.lineTo(-45, 0);
        ctx.arc(0, 0, 45, Math.PI, 0);
        ctx.lineTo(45, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-28, 60);
        ctx.lineTo(-28, 8);
        ctx.arc(0, 8, 28, Math.PI, 0);
        ctx.lineTo(28, 60);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        for (let a = 0; a < 7; a++) {
          const angle = Math.PI + (a * Math.PI) / 6;
          const r1 = 54;
          const r2 = 72;
          ctx.beginPath();
          ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
          ctx.lineTo(Math.cos(angle) * r2, Math.sin(angle) * r2);
          ctx.stroke();
        }
      } else {
        // Babylon Historic Ishtar Gate & Compass
        ctx.beginPath();
        ctx.moveTo(-50, 60);
        ctx.lineTo(-50, -40);
        ctx.lineTo(-30, -40);
        ctx.lineTo(-30, -10);
        ctx.lineTo(30, -10);
        ctx.lineTo(30, -40);
        ctx.lineTo(50, -40);
        ctx.lineTo(50, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-22, 60);
        ctx.lineTo(-22, 10);
        ctx.arc(0, 10, 22, Math.PI, 0);
        ctx.lineTo(22, 60);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, -32, 14, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();

      // University Primary Name
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '800 52px Alexandria, Cairo, sans-serif';
      const mainName = lang === 'en' ? univ.nameEn : univ.nameAr;
      ctx.fillText(mainName, w / 2, 540);

      // Subtitle
      ctx.fillStyle = univ.secondary;
      ctx.font = '600 25px Alexandria, Outfit, sans-serif';
      const subName = lang === 'en' ? univ.nameAr : univ.nameEn;
      ctx.fillText(subName, w / 2, 590);

      // Golden Badge Pill
      ctx.fillStyle = 'rgba(197, 160, 89, 0.16)';
      this.drawRoundRectPath(ctx, 70, 640, w - 140, 62, 31);
      ctx.fill();
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.45)';
      ctx.lineWidth = 1.5;
      this.drawRoundRectPath(ctx, 70, 640, w - 140, 62, 31);
      ctx.stroke();

      ctx.fillStyle = '#FEF08A';
      ctx.font = '700 24px Alexandria, Cairo, sans-serif';
      ctx.fillText(lang === 'en' ? univ.titleEn : univ.titleAr, w / 2, 679);

      // Detailed Academic Scope
      ctx.fillStyle = '#CBD5E1';
      ctx.font = '500 22px Alexandria, IBM Plex Sans Arabic, sans-serif';
      ctx.fillText(lang === 'en' ? univ.badgeEn : univ.badgeAr, w / 2, 755);

      // Stats Pill
      ctx.fillStyle = '#94A3B8';
      ctx.font = '600 21px Alexandria, Outfit, sans-serif';
      ctx.fillText(lang === 'en' ? univ.statsEn : univ.statsAr, w / 2, 805);

      // Five Star Academic Rigor
      ctx.fillStyle = univ.secondary;
      ctx.font = '26px sans-serif';
      ctx.fillText('★ ★ ★ ★ ★', w / 2, 860);

      // Bottom Accreditation Seal
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      this.drawRoundRectPath(ctx, 90, 915, w - 180, 80, 24);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      this.drawRoundRectPath(ctx, 90, 915, w - 180, 80, 24);
      ctx.stroke();

      ctx.fillStyle = '#93C5FD';
      ctx.font = '700 20px Alexandria, sans-serif';
      ctx.fillText(lang === 'en' ? 'ACCREDITED ACADEMIC THESIS REPOSITORY' : 'رصانة أكاديمية معتمدة وفق دليل الجامعات', w / 2, 950);

      ctx.fillStyle = '#64748B';
      ctx.font = '500 17px Outfit, sans-serif';
      ctx.fillText(lang === 'en' ? univ.yearEn : univ.yearAr, w / 2, 978);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      if (this.renderer && this.renderer.capabilities) {
        texture.anisotropy = Math.min(this.renderer.capabilities.getMaxAnisotropy(), 8);
      }
      return texture;
    },

    createCards() {
      while (this.cardGroup.children.length > 0) {
        const obj = this.cardGroup.children[0];
        this.cardGroup.remove(obj);
      }
      this.cards = [];

      const geom = new THREE.BoxGeometry(2.2, 3.1, 0.07);

      this.universities.forEach((univ, idx) => {
        const frontTex = this.createCardTexture(univ, this.currentLang);

        const edgeMat = new THREE.MeshStandardMaterial({
          color: 0x11233f,
          metalness: 0.88,
          roughness: 0.28
        });

        const backMat = new THREE.MeshStandardMaterial({
          color: 0x081220,
          metalness: 0.65,
          roughness: 0.42
        });

        const frontMat = new THREE.MeshStandardMaterial({
          map: frontTex,
          metalness: 0.12,
          roughness: 0.32
        });

        const materials = [edgeMat, edgeMat, edgeMat, edgeMat, frontMat, backMat];

        const cardMesh = new THREE.Mesh(geom, materials);
        cardMesh.position.set(univ.basePos.x, univ.basePos.y, univ.basePos.z);
        cardMesh.rotation.set(univ.baseRot.x, univ.baseRot.y, univ.baseRot.z);
        cardMesh.userData = {
          index: idx,
          univId: univ.id,
          basePos: { ...univ.basePos },
          baseRot: { ...univ.baseRot },
          targetZ: univ.basePos.z,
          targetY: univ.basePos.y,
          targetScale: 1.0,
          phase: idx * 2.1
        };

        this.cardGroup.add(cardMesh);
        this.cards.push(cardMesh);
      });
    },

    createParticles() {
      const count = 75;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      }
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: 0x93c5fd,
        size: 0.055,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      this.particles = new THREE.Points(geom, mat);
      this.scene.add(this.particles);
    },

    bindEvents() {
      const onPointerMove = (e) => {
        const rect = this.container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX) || rect.left + rect.width / 2;
        const clientY = e.clientY || (e.touches && e.touches[0].clientY) || rect.top + rect.height / 2;
        this.pointer.targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        this.mouseVec.x = this.pointer.targetX;
        this.mouseVec.y = this.pointer.targetY;
      };

      this.container.addEventListener('mousemove', onPointerMove, { passive: true });
      this.container.addEventListener('touchmove', onPointerMove, { passive: true });

      this.container.addEventListener('mouseleave', () => {
        this.pointer.targetX = 0;
        this.pointer.targetY = 0;
        this.mouseVec.x = -999;
        this.mouseVec.y = -999;
        this.hoveredIndex = -1;
      });

      this.container.addEventListener('click', () => {
        if (this.hoveredIndex >= 0) {
          this.cycleCardToFront(this.hoveredIndex);
        }
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

    cycleCardToFront(clickedIndex) {
      if (clickedIndex < 0 || clickedIndex >= this.cards.length) return;
      const card = this.cards[clickedIndex];
      card.userData.targetZ = 0.8;
      card.userData.targetScale = 1.05;
      this.cards.forEach((c, idx) => {
        if (idx !== clickedIndex) {
          c.userData.targetZ = c.userData.basePos.z - 0.25;
          c.userData.targetScale = 0.95;
        }
      });
      setTimeout(() => {
        this.cards.forEach(c => {
          c.userData.targetZ = c.userData.basePos.z;
          c.userData.targetScale = 1.0;
        });
      }, 2600);
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
        this.cardGroup.rotation.y = this.pointer.x * 0.28;
        this.cardGroup.rotation.x = -this.pointer.y * 0.2;
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
        const isHovered = this.hoveredIndex === idx;

        const floatY = Math.sin(elapsed * 1.5 + u.phase) * 0.07;
        const floatZ = Math.cos(elapsed * 1.2 + u.phase) * 0.03;
        const floatRotZ = Math.sin(elapsed * 1.0 + u.phase) * 0.015;

        const goalZ = (isHovered ? u.basePos.z + 0.35 : u.targetZ) + floatZ;
        const goalY = u.basePos.y + floatY;
        const goalScale = isHovered ? 1.04 : u.targetScale;

        card.position.z += (goalZ - card.position.z) * 0.06;
        card.position.y += (goalY - card.position.y) * 0.06;
        card.rotation.z = u.baseRot.z + floatRotZ;

        card.scale.x += (goalScale - card.scale.x) * 0.08;
        card.scale.y += (goalScale - card.scale.y) * 0.08;
        card.scale.z += (goalScale - card.scale.z) * 0.08;
      });

      if (this.particles) {
        this.particles.rotation.y = elapsed * 0.03;
        this.particles.rotation.x = elapsed * 0.015;
      }

      this.renderer.render(this.scene, this.camera);
    }
  };

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

