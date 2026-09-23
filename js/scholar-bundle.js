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
     8. SKELETON VIEW CONTROLLER (Smooth Shimmer & Seamless Dismissal)
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
     9. DOM INITIALIZATION
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    ScholarSkeleton.init();
    ScholarStore.init();
    ScholarI18n.init();
    ScholarMobileMenu.init();
    ScholarMarquee.init();
    ScholarReferral.init();
    ScholarFaq.init();
    ScholarFloatingBar.init();
    ScholarMotion.init();
    console.log('[Scholar Academic Library - مكتبة سكولار الأكاديمية] Fully initialized with LTR/RTL Logo Swap, Infinite Marquee, and Solid Navy Design.');
  });

})();

