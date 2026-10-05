/**
 * ============================================
 *  HumanizeAI Engine — App Controller
 *  Maneja la UI, eventos y animaciones
 * ============================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    //  Inicialización
    // ============================================

    const engine = new HumanizerEngine();

    // Elementos DOM
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const btnHumanize = document.getElementById('btnHumanize');
    const btnRehumanize = document.getElementById('btnRehumanize');
    const btnCopy = document.getElementById('btnCopy');
    const btnPaste = document.getElementById('btnPaste');
    const btnClear = document.getElementById('btnClear');
    const humanLevel = document.getElementById('humanLevel');
    const levelBadge = document.getElementById('levelBadge');
    const styleChips = document.getElementById('styleChips');
    const langChips = document.getElementById('langChips');
    const inputCount = document.getElementById('inputCount');
    const outputCount = document.getElementById('outputCount');
    const analysisSection = document.getElementById('analysisSection');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    // Estado
    let currentStyle = 'casual';
    let currentLang = 'es';
    let lastResult = null;

    // ============================================
    //  Partículas de fondo
    // ============================================

    function createParticles() {
        const container = document.getElementById('bgParticles');
        const colors = ['rgba(167, 139, 250, 0.3)', 'rgba(6, 182, 212, 0.3)', 'rgba(52, 211, 153, 0.2)'];

        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${2 + Math.random() * 4}px`;
            particle.style.height = particle.style.width;
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = `${8 + Math.random() * 15}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(particle);
        }
    }

    createParticles();

    // ============================================
    //  Contador de palabras
    // ============================================

    function updateWordCount(text, element) {
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        const chars = text.length;
        element.textContent = `${words.length} palabras · ${chars} caracteres`;
    }

    inputText.addEventListener('input', () => {
        updateWordCount(inputText.value, inputCount);
    });

    // ============================================
    //  Nivel de humanización
    // ============================================

    const levelLabels = {
        1: 'Nivel 1 — Sutil',
        2: 'Nivel 2 — Ligero',
        3: 'Nivel 3 — Balanceado',
        4: 'Nivel 4 — Intenso',
        5: 'Nivel 5 — Agresivo',
    };

    humanLevel.addEventListener('input', () => {
        levelBadge.textContent = levelLabels[humanLevel.value] || 'Nivel 3';
        levelBadge.style.animation = 'none';
        levelBadge.offsetHeight; // Trigger reflow
        levelBadge.style.animation = 'fadeSlideUp 0.3s ease';
    });

    // ============================================
    //  Chips de estilo y idioma
    // ============================================

    styleChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        styleChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentStyle = chip.dataset.style;
    });

    langChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        langChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentLang = chip.dataset.lang;
    });

    // ============================================
    //  Botones de acción
    // ============================================

    btnPaste.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            inputText.value = text;
            updateWordCount(text, inputCount);
            showToast('Texto pegado desde el portapapeles');
        } catch (err) {
            showToast('No se pudo acceder al portapapeles');
        }
    });

    btnClear.addEventListener('click', () => {
        inputText.value = '';
        updateWordCount('', inputCount);
        outputText.innerHTML = `
            <div class="output-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <p>El texto humanizado aparecerá aquí</p>
                <p class="placeholder-sub">Pega tu texto y presiona "Humanizar"</p>
            </div>
        `;
        updateWordCount('', outputCount);
        analysisSection.style.display = 'none';
        btnCopy.disabled = true;
        btnRehumanize.disabled = true;
        lastResult = null;
    });

    btnCopy.addEventListener('click', async () => {
        if (!lastResult) return;
        try {
            await navigator.clipboard.writeText(lastResult.text);
            showToast('¡Texto humanizado copiado! 🎉');
        } catch (err) {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = lastResult.text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast('Texto copiado al portapapeles');
        }
    });

    // ============================================
    //  HUMANIZACIÓN PRINCIPAL
    // ============================================

    btnHumanize.addEventListener('click', () => runHumanization());
    btnRehumanize.addEventListener('click', () => runHumanization());

    async function runHumanization() {
        const text = inputText.value.trim();

        if (!text) {
            showToast('⚠️ Escribe o pega un texto primero');
            inputText.focus();
            return;
        }

        if (text.split(/\s+/).length < 5) {
            showToast('⚠️ El texto es demasiado corto para humanizar');
            return;
        }

        // Show loading
        showLoading();

        // Get options
        const options = {
            level: parseInt(humanLevel.value),
            style: currentStyle,
            language: currentLang,
            useContractions: document.getElementById('optContractions').checked,
            useFillers: document.getElementById('optFillers').checked,
            varyLength: document.getElementById('optVaryLength').checked,
            addImperfections: document.getElementById('optImperfections').checked,
            addRhetorical: document.getElementById('optRhetorical').checked,
            useSynonyms: document.getElementById('optSynonyms').checked,
        };

        // Simulate processing stages for UX
        await simulateProcessing();

        // Run humanization
        const result = engine.humanize(text, options);
        lastResult = result;

        // Hide loading
        hideLoading();

        // Display result
        displayResult(result);

        // Enable buttons
        btnCopy.disabled = false;
        btnRehumanize.disabled = false;

        // Show analysis
        displayAnalysis(result);
    }

    // ============================================
    //  Visualización de resultados
    // ============================================

    function displayResult(result) {
        // Display humanized text
        outputText.innerHTML = '';
        outputText.textContent = result.text;
        outputText.style.animation = 'none';
        outputText.offsetHeight;
        outputText.style.animation = 'fadeSlideUp 0.5s ease';

        updateWordCount(result.text, outputCount);
    }

    function displayAnalysis(result) {
        const { metrics, changelog } = result;

        // Show section
        analysisSection.style.display = 'block';
        analysisSection.style.animation = 'none';
        analysisSection.offsetHeight;
        analysisSection.style.animation = 'fadeSlideUp 0.6s ease';

        // Score circle
        const scoreCircle = document.getElementById('scoreCircle');
        const scoreValue = document.getElementById('scoreValue');
        const scoreLabel = document.getElementById('scoreLabel');

        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (metrics.estimatedHumanScore / 100) * circumference;

        setTimeout(() => {
            scoreCircle.style.strokeDashoffset = offset;
            scoreCircle.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 200);

        animateNumber(scoreValue, 0, metrics.estimatedHumanScore, 1500, '%');

        if (metrics.estimatedHumanScore >= 85) {
            scoreLabel.textContent = '🟢 Excelente — Difícil de detectar';
        } else if (metrics.estimatedHumanScore >= 70) {
            scoreLabel.textContent = '🟡 Buena — Probablemente pase';
        } else if (metrics.estimatedHumanScore >= 50) {
            scoreLabel.textContent = '🟠 Aceptable — Podría levantar sospechas';
        } else {
            scoreLabel.textContent = '🔴 Necesita más trabajo';
        }

        // Changes list
        const changesList = document.getElementById('changesList');
        changesList.innerHTML = '';

        if (changelog.length > 0) {
            changelog.forEach(change => {
                const item = document.createElement('div');
                item.className = 'change-item';
                item.innerHTML = `<span class="change-icon">${change.icon}</span><span>${change.text}</span>`;
                changesList.appendChild(item);
            });
        } else {
            changesList.innerHTML = '<div class="change-item"><span class="change-icon">ℹ️</span><span>No se detectaron patrones de IA significativos</span></div>';
        }

        // Metrics bars
        const maxAvgWords = 30;
        const avgWordsPercent = Math.min((metrics.avgWordsPerSentence.humanized / maxAvgWords) * 100, 100);
        animateBar('metricAvgWords', avgWordsPercent);
        document.getElementById('metricAvgWordsVal').textContent = `${metrics.avgWordsPerSentence.humanized} pal/oración`;

        animateBar('metricVariation', metrics.sentenceLengthVariation);
        document.getElementById('metricVariationVal').textContent = `${metrics.sentenceLengthVariation}%`;

        animateBar('metricDiversity', metrics.lexicalDiversity);
        document.getElementById('metricDiversityVal').textContent = `${metrics.lexicalDiversity}%`;

        animateBar('metricNaturalness', metrics.naturalness);
        document.getElementById('metricNaturalnessVal').textContent = `${metrics.naturalness}%`;

        // Tips
        const tipsList = document.getElementById('tipsList');
        const tips = engine.generateTips(metrics, result.language);
        tipsList.innerHTML = '';
        tips.forEach(tip => {
            const item = document.createElement('div');
            item.className = 'tip-item';
            item.textContent = tip;
            tipsList.appendChild(item);
        });
    }

    // ============================================
    //  Animaciones
    // ============================================

    function animateNumber(element, start, end, duration, suffix = '') {
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            const value = Math.round(start + (end - start) * eased);
            element.textContent = value + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    function animateBar(id, targetWidth) {
        const bar = document.getElementById(id);
        if (bar) {
            setTimeout(() => {
                bar.style.width = `${targetWidth}%`;
            }, 300);
        }
    }

    // ============================================
    //  Loading overlay
    // ============================================

    async function showLoading() {
        loadingOverlay.classList.add('active');
    }

    function hideLoading() {
        loadingOverlay.classList.remove('active');
    }

    async function simulateProcessing() {
        const steps = loadingOverlay.querySelectorAll('.load-step');
        const loadingText = document.getElementById('loadingText');
        const loadingBar = document.getElementById('loadingBar');

        const stages = [
            { text: 'Analizando patrones de IA...', progress: 20 },
            { text: 'Reestructurando oraciones...', progress: 45 },
            { text: 'Humanizando el texto...', progress: 75 },
            { text: 'Verificando naturalidad...', progress: 100 },
        ];

        for (let i = 0; i < stages.length; i++) {
            steps.forEach((step, idx) => {
                step.classList.remove('active', 'done');
                if (idx < i) step.classList.add('done');
                if (idx === i) step.classList.add('active');
            });

            loadingText.textContent = stages[i].text;
            loadingBar.style.width = `${stages[i].progress}%`;

            await new Promise(resolve => setTimeout(resolve, 350 + Math.random() * 300));
        }

        // Mark all as done
        steps.forEach(step => {
            step.classList.remove('active');
            step.classList.add('done');
        });

        await new Promise(resolve => setTimeout(resolve, 200));
    }

    // ============================================
    //  Toast notifications
    // ============================================

    function showToast(message) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // ============================================
    //  Keyboard shortcut
    // ============================================

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runHumanization();
        }
    });

    // ============================================
    //  Initial state
    // ============================================

    updateWordCount('', inputCount);
    updateWordCount('', outputCount);
});
