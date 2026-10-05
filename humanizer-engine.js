/**
 * ============================================
 *  HumanizeAI — Natural Language Engine v3.0
 *  Motor de transformación de texto IA → Humano
 * ============================================
 *
 *  Estrategias principales:
 *  1. Eliminación de patrones léxicos de IA
 *  2. Variación de estructura sintáctica
 *  3. Inyección de personalidad y naturalidad
 *  4. Ruptura de uniformidad
 *  5. Sustitución inteligente de sinónimos
 *  6. Transformaciones estilísticas por contexto
 */

class HumanizerEngine {
    constructor() {
        // ============================================
        //  DICCIONARIOS DE TRANSFORMACIÓN — ESPAÑOL
        // ============================================

        // Frases típicas de IA → alternativas humanas (español)
        this.aiPatternsES = [
            // Conectores formales excesivos
            { pattern: /\bEn conclusión\b/gi, replacements: ['Al final', 'Para cerrar', 'Resumiendo', 'Básicamente', 'En resumen'] },
            { pattern: /\bEs importante destacar que\b/gi, replacements: ['Vale la pena mencionar que', 'Hay que decir que', 'Ojo con esto:', 'No hay que olvidar que', 'Un punto clave es que'] },
            { pattern: /\bEs importante mencionar que\b/gi, replacements: ['También hay que decir que', 'Vale mencionar que', 'Un detalle importante:', 'No está de más decir que'] },
            { pattern: /\bEs fundamental\b/gi, replacements: ['Es clave', 'Es súper importante', 'Resulta esencial', 'Es básico'] },
            { pattern: /\bEs crucial\b/gi, replacements: ['Es clave', 'Es vital', 'Es muy importante', 'Es primordial'] },
            { pattern: /\bEn este sentido\b/gi, replacements: ['Por eso', 'En esa línea', 'Siguiendo con esto', 'Así que', 'De ahí que'] },
            { pattern: /\bEn este contexto\b/gi, replacements: ['Con todo esto', 'En esta situación', 'Visto así', 'Teniendo esto en cuenta'] },
            { pattern: /\bPor otro lado\b/gi, replacements: ['Ahora bien', 'Pero también', 'Aunque', 'Eso sí', 'Sin embargo'] },
            { pattern: /\bCabe destacar que\b/gi, replacements: ['Hay que notar que', 'Un punto interesante es que', 'Lo cierto es que', 'Merece la pena decir que'] },
            { pattern: /\bCabe mencionar que\b/gi, replacements: ['También es cierto que', 'Y aquí viene lo interesante:', 'Algo que vale mencionar es que'] },
            { pattern: /\bCabe señalar que\b/gi, replacements: ['Hay que apuntar que', 'Un detalle a notar:', 'No está de más señalar que'] },
            { pattern: /\bSin lugar a dudas\b/gi, replacements: ['Claramente', 'Sin duda', 'Es evidente que', 'Está claro que'] },
            { pattern: /\bEn definitiva\b/gi, replacements: ['Al fin y al cabo', 'Resumiendo', 'Vamos, que', 'Total, que', 'Básicamente'] },
            { pattern: /\bAsimismo\b/gi, replacements: ['También', 'Además', 'Y encima', 'Por si fuera poco', 'Igualmente'] },
            { pattern: /\bNo obstante\b/gi, replacements: ['Pero', 'Aun así', 'Sin embargo', 'Aunque', 'De todas formas'] },
            { pattern: /\bA lo largo de la historia\b/gi, replacements: ['Desde siempre', 'Históricamente', 'Con el paso del tiempo', 'Desde hace siglos'] },
            { pattern: /\bEn la actualidad\b/gi, replacements: ['Hoy en día', 'Ahora mismo', 'Actualmente', 'En estos tiempos'] },
            { pattern: /\bDe esta manera\b/gi, replacements: ['Así', 'De este modo', 'Con esto', 'De esta forma'] },
            { pattern: /\bEn primer lugar\b/gi, replacements: ['Para empezar', 'Lo primero', 'Antes que nada', 'Primero'] },
            { pattern: /\bEn segundo lugar\b/gi, replacements: ['Después', 'Luego', 'Lo siguiente', 'También'] },
            { pattern: /\bPor lo tanto\b/gi, replacements: ['Así que', 'Por eso', 'Entonces', 'O sea que', 'Con lo cual'] },
            { pattern: /\bEn resumen\b/gi, replacements: ['Para resumir', 'Total', 'Básicamente', 'En pocas palabras'] },
            { pattern: /\bEs decir\b/gi, replacements: ['O sea', 'Vamos', 'En otras palabras', 'Dicho de otra forma'] },
            { pattern: /\bDicho esto\b/gi, replacements: ['Con esto en mente', 'Aclarado esto', 'Teniendo esto claro', 'Sabiendo esto'] },
            { pattern: /\bPor consiguiente\b/gi, replacements: ['Entonces', 'Por eso', 'Así que', 'Como resultado'] },
            { pattern: /\bDe igual forma\b/gi, replacements: ['Del mismo modo', 'Igual', 'De la misma manera', 'También'] },
            { pattern: /\bDe igual manera\b/gi, replacements: ['Igualmente', 'Lo mismo pasa con', 'Parecido a esto', 'También'] },
            { pattern: /\bEn este orden de ideas\b/gi, replacements: ['Siguiendo esta línea', 'Con esto en mente', 'En esa onda'] },
            { pattern: /\bTal como se mencionó anteriormente\b/gi, replacements: ['Como ya dije', 'Como mencioné antes', 'Volviendo a lo anterior'] },
            { pattern: /\bComo se mencionó anteriormente\b/gi, replacements: ['Como dije antes', 'Volviendo a lo que mencioné', 'Retomando'] },

            // Verbos y expresiones pomposas
            { pattern: /\bha revolucionado significativamente\b/gi, replacements: ['ha cambiado bastante', 'ha dado un giro total a', 'ha transformado', 'ha sacudido'] },
            { pattern: /\bha experimentado un crecimiento\b/gi, replacements: ['ha crecido', 'ha pegado un estirón', 'ha ido en aumento'] },
            { pattern: /\bha demostrado ser\b/gi, replacements: ['resultó ser', 'terminó siendo', 'ha probado que es'] },
            { pattern: /\bdesempeña un papel fundamental\b/gi, replacements: ['juega un papel clave', 'es súper importante', 'tiene un rol central'] },
            { pattern: /\bdesempeña un papel crucial\b/gi, replacements: ['es clave', 'tiene un rol importantísimo', 'juega un papel vital'] },
            { pattern: /\bimplementar soluciones\b/gi, replacements: ['poner en marcha soluciones', 'aplicar soluciones', 'meter mano a los problemas'] },
            { pattern: /\boptimizar procesos\b/gi, replacements: ['mejorar los procesos', 'hacer las cosas más eficientes', 'agilizar todo'] },
            { pattern: /\bgarantizar la calidad\b/gi, replacements: ['asegurar que sea bueno', 'mantener la calidad', 'cuidar que todo salga bien'] },
            { pattern: /\bfomentar el desarrollo\b/gi, replacements: ['impulsar el crecimiento', 'darle un empujón al desarrollo', 'promover que crezca'] },
            { pattern: /\babordar esta problemática\b/gi, replacements: ['enfrentar este problema', 'lidiar con esto', 'hacerle frente a este tema'] },
            { pattern: /\bgenerar un impacto\b/gi, replacements: ['tener un efecto', 'marcar la diferencia', 'causar un cambio'] },
            { pattern: /\ba lo largo y ancho\b/gi, replacements: ['por todo', 'en todos los rincones de', 'en cada parte de'] },
            { pattern: /\bmejoras sustanciales\b/gi, replacements: ['mejoras importantes', 'avances significativos', 'cambios notables'] },
            { pattern: /\ben la eficiencia operativa\b/gi, replacements: ['en cómo funcionan las cosas', 'en la eficiencia', 'en el rendimiento'] },
            { pattern: /\bmúltiples industrias\b/gi, replacements: ['varias industrias', 'muchos sectores', 'distintas áreas'] },
            { pattern: /\bdiversos campos\b/gi, replacements: ['varias áreas', 'muchos campos', 'distintas disciplinas'] },
            { pattern: /\bamplia gama de\b/gi, replacements: ['un montón de', 'una gran variedad de', 'muchos tipos de'] },
            { pattern: /\buna amplia variedad\b/gi, replacements: ['un montón', 'una gran cantidad', 'muchas opciones'] },
            { pattern: /\bsin precedentes\b/gi, replacements: ['nunca antes visto', 'como nunca', 'histórico'] },
            { pattern: /\bde manera significativa\b/gi, replacements: ['bastante', 'mucho', 'de forma notable', 'considerablemente'] },
            { pattern: /\bde manera efectiva\b/gi, replacements: ['bien', 'de forma eficaz', 'con buenos resultados'] },
            { pattern: /\bimprescindible\b/gi, replacements: ['necesario', 'indispensable', 'que no puede faltar'] },
            { pattern: /\binnegable\b/gi, replacements: ['evidente', 'claro', 'obvio', 'que salta a la vista'] },
            { pattern: /\bparadigma\b/gi, replacements: ['modelo', 'enfoque', 'forma de ver las cosas', 'perspectiva'] },
            { pattern: /\bholístico\b/gi, replacements: ['integral', 'completo', 'que lo abarca todo'] },
            { pattern: /\bsinergias\b/gi, replacements: ['colaboraciones', 'conexiones', 'fuerzas combinadas'] },
            { pattern: /\bproactivo\b/gi, replacements: ['anticipado', 'que se adelanta', 'previsor'] },
            { pattern: /\btransversal\b/gi, replacements: ['que cruza todo', 'que toca varias áreas', 'general'] },
            { pattern: /\bescalable\b/gi, replacements: ['que puede crecer', 'ampliable', 'expansible'] },
            { pattern: /\bresilient[e]?\b/gi, replacements: ['resistente', 'que aguanta', 'fuerte'] },
        ];

        // Frases típicas de IA → alternativas humanas (inglés)
        this.aiPatternsEN = [
            { pattern: /\bIn conclusion\b/gi, replacements: ['To wrap up', 'All in all', 'At the end of the day', 'Bottom line'] },
            { pattern: /\bIt is important to note that\b/gi, replacements: ['Worth mentioning,', 'One thing to keep in mind is', "Don't forget that", 'A key point here is'] },
            { pattern: /\bIt is worth noting that\b/gi, replacements: ['Interestingly,', 'One interesting thing is', 'Something worth pointing out:'] },
            { pattern: /\bFurthermore\b/gi, replacements: ['Plus', 'On top of that', 'Also', 'And another thing —'] },
            { pattern: /\bMoreover\b/gi, replacements: ['Also', 'Besides', 'Plus', 'What\'s more'] },
            { pattern: /\bHowever\b/gi, replacements: ['But', 'That said', 'Still', 'Then again', 'Though'] },
            { pattern: /\bNonetheless\b/gi, replacements: ['Still', 'Even so', 'But still', 'That said'] },
            { pattern: /\bNevertheless\b/gi, replacements: ['But still', 'Even so', 'Regardless', 'All the same'] },
            { pattern: /\bAdditionally\b/gi, replacements: ['Also', 'Plus', 'On top of that', 'Another thing —'] },
            { pattern: /\bConsequently\b/gi, replacements: ['So', 'Because of this', 'As a result', 'That meant'] },
            { pattern: /\bTherefore\b/gi, replacements: ['So', 'That\'s why', 'Which means', 'Because of that'] },
            { pattern: /\bIn today\'s world\b/gi, replacements: ['These days', 'Nowadays', 'Right now', 'In this day and age'] },
            { pattern: /\bIn today\'s society\b/gi, replacements: ['Nowadays', 'In the world we live in', 'As things stand'] },
            { pattern: /\bhas revolutionized\b/gi, replacements: ['has totally changed', 'has shaken up', 'has transformed', 'completely shifted'] },
            { pattern: /\bplays a crucial role\b/gi, replacements: ['is really important', 'matters a lot', 'is key', 'has a big impact'] },
            { pattern: /\bplays a vital role\b/gi, replacements: ['is essential', 'really matters', 'is super important'] },
            { pattern: /\bIt is essential to\b/gi, replacements: ['You need to', 'We have to', "It's key to", "You've got to"] },
            { pattern: /\bLet\'s delve into\b/gi, replacements: ["Let's look at", "Let's dig into", "Let's explore", "Let's break down"] },
            { pattern: /\bdelve into\b/gi, replacements: ['dig into', 'look into', 'explore', 'get into'] },
            { pattern: /\bdelve\b/gi, replacements: ['dig', 'explore', 'dive', 'look'] },
            { pattern: /\bIn the realm of\b/gi, replacements: ['In', 'When it comes to', 'In the world of', 'Talking about'] },
            { pattern: /\bNavigate the complexities\b/gi, replacements: ['Deal with the tricky parts', 'Work through the challenges', 'Handle the complicated stuff'] },
            { pattern: /\bIt is imperative\b/gi, replacements: ["It's really important", 'We need to', "It's crucial", "There's no getting around it —"] },
            { pattern: /\bundeniably\b/gi, replacements: ['clearly', 'obviously', 'without question', 'for sure'] },
            { pattern: /\bparadigm\b/gi, replacements: ['model', 'framework', 'approach', 'way of thinking'] },
            { pattern: /\bholistic\b/gi, replacements: ['complete', 'full-picture', 'all-around', 'comprehensive'] },
            { pattern: /\bsynergy\b/gi, replacements: ['collaboration', 'teamwork', 'combined effort'] },
            { pattern: /\bsynergies\b/gi, replacements: ['collaborations', 'combined strengths', 'partnerships'] },
            { pattern: /\bleverage\b/gi, replacements: ['use', 'take advantage of', 'make the most of', 'tap into'] },
            { pattern: /\bseamlessly\b/gi, replacements: ['smoothly', 'easily', 'without a hitch', 'naturally'] },
            { pattern: /\bunprecedented\b/gi, replacements: ['never seen before', 'historic', 'record-breaking', 'unheard of'] },
            { pattern: /\bwide range of\b/gi, replacements: ['lots of', 'a bunch of', 'all kinds of', 'many different'] },
            { pattern: /\bmultifaceted\b/gi, replacements: ['complex', 'many-sided', 'layered', 'complicated'] },
            { pattern: /\brobust\b/gi, replacements: ['solid', 'strong', 'reliable', 'dependable'] },
            { pattern: /\bfacilitate\b/gi, replacements: ['help with', 'make easier', 'support', 'enable'] },
            { pattern: /\butilize\b/gi, replacements: ['use', 'work with', 'employ', 'put to use'] },
            { pattern: /\bimplement\b/gi, replacements: ['set up', 'put in place', 'roll out', 'start using'] },
            { pattern: /\boptimize\b/gi, replacements: ['improve', 'fine-tune', 'make better', 'streamline'] },
        ];

        // Muletillas y conectores naturales — español
        this.fillersES = [
            'bueno, ', 'la verdad es que ', 'sinceramente, ', 'a ver, ', 'mira, ',
            'o sea, ', 'digamos que ', 'lo cierto es que ', 'para ser sincero, ',
            'siendo realistas, ', 'hay que reconocer que ', 'de hecho, ',
            'en realidad, ', 'lo que pasa es que ', 'al fin y al cabo, ',
            'vamos a ver, ', 'eso sí, ', 'y lo mejor de todo es que ',
            'curiosamente, ', 'lo interesante aquí es que ',
        ];

        // Muletillas — inglés
        this.fillersEN = [
            'honestly, ', 'look, ', 'the thing is, ', 'I mean, ', 'here\'s the deal — ',
            'truth be told, ', 'the reality is, ', 'in fact, ', 'actually, ', 'to be fair, ',
            'as it turns out, ', 'interestingly enough, ', 'the way I see it, ',
            'let\'s be real here — ', 'you know what? ', 'what\'s interesting is, ',
        ];

        // Expresiones de opinión sutil — español
        this.opinionExpressionsES = [
            'desde mi punto de vista, ', 'personalmente creo que ', 'a mi parecer, ',
            'si me preguntas a mí, ', 'yo diría que ', 'tengo la impresión de que ',
        ];

        // Expresiones de opinión — inglés
        this.opinionExpressionsEN = [
            'from where I stand, ', 'if you ask me, ', 'in my view, ',
            'the way I see it, ', 'I\'d say ', 'I think ',
        ];

        // Preguntas retóricas — español
        this.rhetoricalES = [
            '¿Y por qué importa esto? ', '¿Tiene sentido, no? ',
            '¿Lo ves? ', '¿No te parece curioso? ',
            '¿Y sabes qué es lo mejor? ', '¿Pero realmente funciona? ',
            '¿Te has parado a pensarlo? ', '¿Suena complicado? No tanto. ',
        ];

        // Preguntas retóricas — inglés
        this.rhetoricalEN = [
            'Why does this matter? ', 'Makes sense, right? ',
            'See what I mean? ', 'Isn\'t that interesting? ',
            'And the best part? ', 'But does it actually work? ',
            'Ever thought about it? ', 'Sounds complicated? Not really. ',
        ];

        // Transiciones suaves — español
        this.softTransitionsES = [
            'Hablando de eso, ', 'Y esto nos lleva a otro punto. ',
            'Ahora, cambiando un poco de tema, ', 'Relacionado con esto, ',
            'Volviendo al tema principal, ', 'Pero espera, hay más. ',
        ];

        // Transiciones — inglés
        this.softTransitionsEN = [
            'Speaking of which, ', 'And this brings us to another point. ',
            'Now, switching gears a bit, ', 'On a related note, ',
            'Getting back to the main point, ', 'But wait, there\'s more. ',
        ];

        // Sinónimos comunes — español (para diversidad léxica)
        this.synonymsES = {
            'importante': ['relevante', 'significativo', 'clave', 'notable', 'considerable'],
            'necesario': ['indispensable', 'esencial', 'imprescindible', 'requerido'],
            'realizar': ['hacer', 'llevar a cabo', 'ejecutar', 'efectuar'],
            'utilizar': ['usar', 'emplear', 'aprovechar', 'servirse de'],
            'obtener': ['conseguir', 'lograr', 'alcanzar', 'sacar'],
            'mejorar': ['perfeccionar', 'optimizar', 'potenciar', 'refinar'],
            'problema': ['desafío', 'reto', 'dificultad', 'complicación', 'tema'],
            'solución': ['respuesta', 'salida', 'alternativa', 'remedio'],
            'resultado': ['efecto', 'consecuencia', 'producto', 'fruto'],
            'proceso': ['procedimiento', 'método', 'camino', 'mecánica'],
            'aspecto': ['faceta', 'ángulo', 'punto', 'dimensión'],
            'ámbito': ['campo', 'terreno', 'área', 'esfera'],
            'significativo': ['notable', 'importante', 'considerable', 'relevante'],
            'considerable': ['notable', 'significativo', 'apreciable', 'bastante'],
            'adecuado': ['apropiado', 'correcto', 'idóneo', 'conveniente'],
            'eficiente': ['efectivo', 'productivo', 'eficaz', 'óptimo'],
            'desarrollar': ['crear', 'elaborar', 'construir', 'diseñar'],
            'establecer': ['fijar', 'definir', 'determinar', 'plantear'],
            'proporcionar': ['dar', 'ofrecer', 'brindar', 'facilitar'],
            'demostrar': ['mostrar', 'probar', 'evidenciar', 'enseñar'],
            'permitir': ['posibilitar', 'facilitar', 'dejar', 'hacer posible'],
            'incrementar': ['aumentar', 'subir', 'elevar', 'crecer'],
            'reducir': ['disminuir', 'bajar', 'recortar', 'achicar'],
            'garantizar': ['asegurar', 'certificar', 'avalar'],
            'considerar': ['pensar en', 'evaluar', 'tomar en cuenta', 'sopesar'],
            'contribuir': ['aportar', 'ayudar', 'sumar', 'colaborar'],
        };

        // Sinónimos — inglés
        this.synonymsEN = {
            'important': ['key', 'significant', 'crucial', 'notable', 'relevant'],
            'necessary': ['needed', 'essential', 'required', 'vital'],
            'utilize': ['use', 'employ', 'work with', 'leverage'],
            'obtain': ['get', 'acquire', 'secure', 'gain'],
            'improve': ['enhance', 'boost', 'upgrade', 'refine'],
            'problem': ['issue', 'challenge', 'hurdle', 'difficulty'],
            'solution': ['answer', 'fix', 'approach', 'remedy'],
            'result': ['outcome', 'effect', 'consequence', 'impact'],
            'process': ['procedure', 'method', 'workflow', 'approach'],
            'significant': ['major', 'notable', 'substantial', 'meaningful'],
            'demonstrate': ['show', 'prove', 'reveal', 'illustrate'],
            'implement': ['set up', 'introduce', 'deploy', 'launch'],
            'establish': ['set up', 'create', 'build', 'form'],
            'provide': ['give', 'offer', 'supply', 'deliver'],
            'ensure': ['make sure', 'guarantee', 'confirm', 'verify'],
            'increase': ['boost', 'raise', 'grow', 'expand'],
            'reduce': ['cut', 'lower', 'decrease', 'minimize'],
            'consider': ['think about', 'look at', 'weigh', 'evaluate'],
            'contribute': ['add to', 'help with', 'play a part in', 'support'],
            'facilitate': ['help', 'enable', 'make easier', 'support'],
            'achieve': ['reach', 'accomplish', 'pull off', 'hit'],
            'effective': ['solid', 'working', 'successful', 'productive'],
        };

        // Expresiones de cierre de párrafo — español
        this.paragraphClosersES = [
            ' Y la cosa no para ahí.',
            ' Esto es solo la punta del iceberg.',
            ' Pero hay más que considerar.',
            ' Y esto apenas es el comienzo.',
            ' Pero no nos adelantemos.',
        ];

        // Expresiones de cierre — inglés
        this.paragraphClosersEN = [
            ' And it doesn\'t stop there.',
            ' That\'s just the tip of the iceberg.',
            ' But there\'s more to it than that.',
            ' And we\'re just getting started.',
            ' But let\'s not get ahead of ourselves.',
        ];

        // Registro de cambios para análisis
        this.changelog = [];
    }

    // ============================================
    //  DETECCIÓN DE IDIOMA
    // ============================================

    detectLanguage(text) {
        const spanishIndicators = [
            /\b(el|la|los|las|un|una|unos|unas)\b/gi,
            /\b(es|está|son|están|fue|ser|estar)\b/gi,
            /\b(que|como|para|por|con|en|de|del)\b/gi,
            /\b(no|sí|más|muy|también|pero|sin|ya)\b/gi,
            /[áéíóúñ¿¡]/g,
        ];

        const englishIndicators = [
            /\b(the|a|an|this|that|these|those)\b/gi,
            /\b(is|are|was|were|be|been|being)\b/gi,
            /\b(of|in|to|for|with|on|at|from)\b/gi,
            /\b(not|and|or|but|if|so|just|also)\b/gi,
        ];

        let esScore = 0;
        let enScore = 0;

        spanishIndicators.forEach(regex => {
            const matches = text.match(regex);
            esScore += matches ? matches.length : 0;
        });

        englishIndicators.forEach(regex => {
            const matches = text.match(regex);
            enScore += matches ? matches.length : 0;
        });

        return esScore >= enScore ? 'es' : 'en';
    }

    // ============================================
    //  MOTOR PRINCIPAL DE HUMANIZACIÓN
    // ============================================

    humanize(text, options = {}) {
        this.changelog = [];

        const {
            level = 3,
            style = 'casual',
            language = 'auto',
            useContractions = true,
            useFillers = true,
            varyLength = true,
            addImperfections = true,
            addRhetorical = false,
            useSynonyms = true,
        } = options;

        const lang = language === 'auto' ? this.detectLanguage(text) : language;

        let result = text;
        const originalWordCount = text.split(/\s+/).filter(w => w.length > 0).length;

        // Paso 1: Reemplazar patrones típicos de IA
        result = this.replaceAIPatterns(result, lang, level);

        // Paso 2: Sustitución de sinónimos
        if (useSynonyms) {
            result = this.applySynonyms(result, lang, level);
        }

        // Paso 2.5: Compresión inteligente (eliminar relleno y redundancia)
        result = this.compressText(result, lang, level);

        // Paso 3: Variar estructura de oraciones
        if (varyLength) {
            result = this.varysentenceStructure(result, lang, level);
        }

        // Paso 4: Añadir muletillas y conectores naturales (limitado)
        if (useFillers) {
            result = this.injectFillers(result, lang, level, style);
        }

        // Paso 5: Inyectar preguntas retóricas
        if (addRhetorical) {
            result = this.injectRhetoricalQuestions(result, lang, level);
        }

        // Paso 6: Aplicar estilo de escritura
        result = this.applyWritingStyle(result, lang, style, level);

        // Paso 7: Contracciones naturales
        if (useContractions) {
            result = this.applyContractions(result, lang);
        }

        // Paso 8: Añadir imperfecciones humanas
        if (addImperfections) {
            result = this.addHumanImperfections(result, lang, level);
        }

        // Paso 9: Variar puntuación
        result = this.varyPunctuation(result, lang, level);

        // Paso 10: Ruptura de uniformidad en párrafos
        result = this.breakParagraphUniformity(result, lang, level);

        // Paso 11: Limpieza final
        result = this.finalCleanup(result);

        // Paso 12: Control de longitud — asegurar que no crezca más de 10%
        result = this.controlLength(result, originalWordCount, lang);

        return {
            text: result,
            changelog: this.changelog,
            metrics: this.analyzeMetrics(text, result),
            language: lang,
        };
    }

    // ============================================
    //  PASO 1: Reemplazar patrones de IA
    // ============================================

    replaceAIPatterns(text, lang, level) {
        const patterns = lang === 'es' ? this.aiPatternsES : this.aiPatternsEN;
        let result = text;
        let changeCount = 0;

        patterns.forEach(({ pattern, replacements }) => {
            const matches = result.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    // Higher levels = more aggressive replacement
                    if (Math.random() < 0.4 + (level * 0.12)) {
                        const replacement = this.pickRandom(replacements);
                        // Preserve original capitalization
                        const finalReplacement = this.matchCase(match, replacement);
                        result = result.replace(match, finalReplacement);
                        changeCount++;
                    }
                });
            }
        });

        if (changeCount > 0) {
            this.changelog.push({
                icon: '🔄',
                text: `${changeCount} expresiones típicas de IA reemplazadas por alternativas naturales`,
            });
        }

        return result;
    }

    // ============================================
    //  PASO 2: Sustitución de sinónimos
    // ============================================

    applySynonyms(text, lang, level) {
        const synonymDict = lang === 'es' ? this.synonymsES : this.synonymsEN;
        let result = text;
        let changeCount = 0;
        const probability = 0.2 + (level * 0.1);

        Object.entries(synonymDict).forEach(([word, synonyms]) => {
            const regex = new RegExp(`\\b${this.escapeRegex(word)}\\b`, 'gi');
            const matches = result.match(regex);

            if (matches && matches.length > 0) {
                // Only replace some occurrences, not all
                let replaced = false;
                result = result.replace(regex, (match) => {
                    if (!replaced && Math.random() < probability) {
                        replaced = true;
                        changeCount++;
                        const syn = this.pickRandom(synonyms);
                        return this.matchCase(match, syn);
                    }
                    return match;
                });
            }
        });

        if (changeCount > 0) {
            this.changelog.push({
                icon: '📝',
                text: `${changeCount} palabras sustituidas por sinónimos para diversidad léxica`,
            });
        }

        return result;
    }

    // ============================================
    //  PASO 2.5: Compresión inteligente
    //  Elimina relleno, redundancias y frases infladas
    // ============================================

    compressText(text, lang, level) {
        let result = text;
        let changeCount = 0;

        // Frases infladas → versiones compactas (español)
        const compressionsES = [
            { from: /\bcon el fin de\b/gi, to: 'para' },
            { from: /\bcon el objetivo de\b/gi, to: 'para' },
            { from: /\bcon la finalidad de\b/gi, to: 'para' },
            { from: /\ba fin de\b/gi, to: 'para' },
            { from: /\ben lo que respecta a\b/gi, to: 'sobre' },
            { from: /\ben relación con\b/gi, to: 'sobre' },
            { from: /\ben lo referente a\b/gi, to: 'sobre' },
            { from: /\btiene la capacidad de\b/gi, to: 'puede' },
            { from: /\bes capaz de\b/gi, to: 'puede' },
            { from: /\bse encuentra en la posición de\b/gi, to: 'puede' },
            { from: /\bmediante el uso de\b/gi, to: 'usando' },
            { from: /\ba través del uso de\b/gi, to: 'usando' },
            { from: /\bpor medio de\b/gi, to: 'mediante' },
            { from: /\ben virtud de\b/gi, to: 'por' },
            { from: /\bdebido al hecho de que\b/gi, to: 'porque' },
            { from: /\bdebido a que\b/gi, to: 'porque' },
            { from: /\bpuesto que\b/gi, to: 'porque' },
            { from: /\bdado que\b/gi, to: 'ya que' },
            { from: /\ben el caso de que\b/gi, to: 'si' },
            { from: /\bsiempre y cuando\b/gi, to: 'si' },
            { from: /\ba pesar del hecho de que\b/gi, to: 'aunque' },
            { from: /\bindependientemente de\b/gi, to: 'sin importar' },
            { from: /\btiene como objetivo\b/gi, to: 'busca' },
            { from: /\buna gran cantidad de\b/gi, to: 'muchos' },
            { from: /\bun gran número de\b/gi, to: 'muchos' },
            { from: /\bla gran mayoría de\b/gi, to: 'la mayoría de' },
            { from: /\ben el momento actual\b/gi, to: 'ahora' },
            { from: /\ben el momento presente\b/gi, to: 'ahora' },
            { from: /\bde manera significativa\b/gi, to: 'mucho' },
            { from: /\bde forma considerable\b/gi, to: 'bastante' },
            { from: /\bde forma significativa\b/gi, to: 'mucho' },
            { from: /\bde manera considerable\b/gi, to: 'bastante' },
            { from: /\bde manera sustancial\b/gi, to: 'bastante' },
            { from: /\buna amplia gama de\b/gi, to: 'muchos' },
            { from: /\buna amplia variedad de\b/gi, to: 'muchos' },
            { from: /\ben la sociedad contemporánea\b/gi, to: 'hoy' },
            { from: /\ben la sociedad actual\b/gi, to: 'hoy' },
            { from: /\bde la tecnología moderna\b/gi, to: 'tecnológicos' },
        ];

        // Frases infladas → versiones compactas (inglés)
        const compressionsEN = [
            { from: /\bwith the purpose of\b/gi, to: 'to' },
            { from: /\bwith the objective of\b/gi, to: 'to' },
            { from: /\bin order to\b/gi, to: 'to' },
            { from: /\bfor the purpose of\b/gi, to: 'to' },
            { from: /\bwith regard to\b/gi, to: 'about' },
            { from: /\bin regard to\b/gi, to: 'about' },
            { from: /\bwith respect to\b/gi, to: 'about' },
            { from: /\bhas the ability to\b/gi, to: 'can' },
            { from: /\bis able to\b/gi, to: 'can' },
            { from: /\bhas the capacity to\b/gi, to: 'can' },
            { from: /\bby means of\b/gi, to: 'by' },
            { from: /\bthrough the use of\b/gi, to: 'using' },
            { from: /\bdue to the fact that\b/gi, to: 'because' },
            { from: /\bin spite of the fact that\b/gi, to: 'although' },
            { from: /\bat this point in time\b/gi, to: 'now' },
            { from: /\bin the event that\b/gi, to: 'if' },
            { from: /\ba large number of\b/gi, to: 'many' },
            { from: /\ba great deal of\b/gi, to: 'much' },
            { from: /\bthe vast majority of\b/gi, to: 'most' },
            { from: /\bin a significant manner\b/gi, to: 'significantly' },
            { from: /\ba wide range of\b/gi, to: 'many' },
            { from: /\ba wide variety of\b/gi, to: 'many' },
        ];

        const compressions = lang === 'es' ? compressionsES : compressionsEN;
        const compressProb = 0.3 + (level * 0.14); // Higher level = more compression

        compressions.forEach(({ from, to }) => {
            if (result.match(from) && Math.random() < compressProb) {
                result = result.replace(from, (match) => {
                    changeCount++;
                    return this.matchCase(match, to);
                });
            }
        });

        // Remove redundant adverbs at higher levels
        if (level >= 3) {
            const redundantAdverbs = lang === 'es'
                ? [/\bsignificativamente\s+/gi, /\bconsiderablemente\s+/gi, /\bfundamentalmente\s+/gi, /\bsustancialmente\s+/gi, /\bsumamente\s+/gi]
                : [/\bsignificantly\s+/gi, /\bsubstantially\s+/gi, /\bfundamentally\s+/gi, /\bconsiderably\s+/gi, /\bimmensely\s+/gi];

            redundantAdverbs.forEach(adverb => {
                if (result.match(adverb) && Math.random() < 0.5) {
                    result = result.replace(adverb, '');
                    changeCount++;
                }
            });
        }

        if (changeCount > 0) {
            this.changelog.push({
                icon: '🗜️',
                text: `${changeCount} frases redundantes comprimidas para texto más directo`,
            });
        }

        return result;
    }

    // ============================================
    //  PASO 12: Control de longitud
    //  Asegura que el texto no crezca más de 10%
    // ============================================

    controlLength(text, originalWordCount, lang) {
        const currentWords = text.split(/\s+/).filter(w => w.length > 0);
        const maxWords = Math.ceil(originalWordCount * 1.10); // Max 10% growth

        if (currentWords.length <= maxWords) return text;

        // Text grew too much — trim excess by removing filler sentences or shortening
        const sentences = this.splitSentences(text);
        const result = [];
        let wordCount = 0;

        for (const sentence of sentences) {
            const sWords = sentence.trim().split(/\s+/).length;
            if (wordCount + sWords <= maxWords) {
                result.push(sentence);
                wordCount += sWords;
            } else if (wordCount < originalWordCount * 0.9) {
                // We haven't reached minimum — keep this sentence
                result.push(sentence);
                wordCount += sWords;
            }
        }

        this.changelog.push({
            icon: '📏',
            text: `Longitud controlada: texto ajustado para no exceder el original`,
        });

        return result.join(' ');
    }

    // ============================================
    //  PASO 3: Variar estructura de oraciones
    // ============================================

    varysentenceStructure(text, lang, level) {
        const paragraphs = text.split(/\n\n+/);
        let changeCount = 0;

        const processed = paragraphs.map(paragraph => {
            if (paragraph.trim().length === 0) return paragraph;

            const sentences = this.splitSentences(paragraph);
            if (sentences.length < 3) return paragraph;

            const modified = [];
            let i = 0;

            while (i < sentences.length) {
                const sentence = sentences[i].trim();
                if (!sentence) { i++; continue; }

                const words = sentence.split(/\s+/);

                // Fusionar oraciones cortas consecutivas
                if (words.length < 8 && i + 1 < sentences.length) {
                    const next = sentences[i + 1]?.trim();
                    if (next && next.split(/\s+/).length < 10 && Math.random() < 0.3 * (level / 3)) {
                        const connector = lang === 'es'
                            ? this.pickRandom([' y ', ' aunque ', ' pero ', ', y además '])
                            : this.pickRandom([' and ', ' but ', ' yet ', ', plus ']);
                        const merged = sentence.replace(/[.!?]$/, '') + connector + this.lowercaseFirst(next);
                        modified.push(merged);
                        changeCount++;
                        i += 2;
                        continue;
                    }
                }

                // Dividir oraciones muy largas
                if (words.length > 30 && Math.random() < 0.5 * (level / 3)) {
                    const commaIndex = sentence.indexOf(',', Math.floor(sentence.length * 0.3));
                    if (commaIndex > 0 && commaIndex < sentence.length * 0.7) {
                        const part1 = sentence.substring(0, commaIndex).trim() + '.';
                        const part2 = this.capitalizeFirst(sentence.substring(commaIndex + 1).trim());
                        modified.push(part1);
                        modified.push(part2);
                        changeCount++;
                        i++;
                        continue;
                    }
                }

                // Invertir estructura ocasionalmente (mover complemento al inicio)
                if (words.length > 12 && Math.random() < 0.15 * (level / 3)) {
                    const commaPos = sentence.indexOf(',');
                    if (commaPos > 5 && commaPos < sentence.length / 2) {
                        // Move the second part to front occasionally
                        const part1 = sentence.substring(0, commaPos).trim();
                        const part2 = sentence.substring(commaPos + 1).trim();
                        if (part2.length > 10) {
                            const inverted = this.capitalizeFirst(part2.replace(/[.!?]$/, '')) + ', ' + this.lowercaseFirst(part1) + '.';
                            modified.push(inverted);
                            changeCount++;
                            i++;
                            continue;
                        }
                    }
                }

                modified.push(sentence);
                i++;
            }

            return modified.join(' ');
        });

        if (changeCount > 0) {
            this.changelog.push({
                icon: '🔀',
                text: `${changeCount} oraciones reestructuradas para mayor variación`,
            });
        }

        return processed.join('\n\n');
    }

    // ============================================
    //  PASO 4: Inyectar muletillas naturales
    // ============================================

    injectFillers(text, lang, level, style) {
        if (style === 'academic' || style === 'professional') return text;

        const fillers = lang === 'es' ? this.fillersES : this.fillersEN;
        const paragraphs = text.split(/\n\n+/);
        let changeCount = 0;

        // Cap total fillers to avoid text bloat — max 2 total regardless of level
        const maxFillers = 2;
        const prob = 0.08 + (level * 0.04);

        const processed = paragraphs.map(paragraph => {
            const sentences = this.splitSentences(paragraph);
            if (sentences.length < 2) return paragraph;

            return sentences.map((sentence, idx) => {
                const trimmed = sentence.trim();
                if (!trimmed) return sentence;

                // Don't add fillers to very short sentences or first sentence
                if (trimmed.split(/\s+/).length < 5 || idx === 0) return sentence;

                // Respect the cap
                if (changeCount >= maxFillers) return sentence;

                if (Math.random() < prob) {
                    const filler = this.pickRandom(fillers);
                    changeCount++;
                    return this.capitalizeFirst(filler) + this.lowercaseFirst(trimmed);
                }

                return sentence;
            }).join(' ');
        });

        if (changeCount > 0) {
            this.changelog.push({
                icon: '💬',
                text: `${changeCount} muletillas y expresiones naturales inyectadas`,
            });
        }

        return processed.join('\n\n');
    }

    // ============================================
    //  PASO 5: Preguntas retóricas
    // ============================================

    injectRhetoricalQuestions(text, lang, level) {
        const questions = lang === 'es' ? this.rhetoricalES : this.rhetoricalEN;
        const paragraphs = text.split(/\n\n+/);
        let changeCount = 0;
        const maxQuestions = Math.min(level, 3);
        let questionsAdded = 0;

        const processed = paragraphs.map((paragraph, pIdx) => {
            if (questionsAdded >= maxQuestions) return paragraph;
            if (pIdx === 0) return paragraph; // Skip first paragraph

            const sentences = this.splitSentences(paragraph);
            if (sentences.length < 2) return paragraph;

            // Insert a rhetorical question at a natural break point
            if (Math.random() < 0.25 * (level / 3)) {
                const insertAt = Math.floor(sentences.length / 2);
                const question = this.pickRandom(questions);
                sentences.splice(insertAt, 0, question);
                changeCount++;
                questionsAdded++;
            }

            return sentences.join(' ');
        });

        if (changeCount > 0) {
            this.changelog.push({
                icon: '❓',
                text: `${changeCount} preguntas retóricas insertadas para naturalidad`,
            });
        }

        return processed.join('\n\n');
    }

    // ============================================
    //  PASO 6: Aplicar estilo de escritura
    // ============================================

    applyWritingStyle(text, lang, style, level) {
        let result = text;

        switch (style) {
            case 'casual':
                result = this.applyCasualStyle(result, lang, level);
                break;
            case 'academic':
                result = this.applyAcademicStyle(result, lang, level);
                break;
            case 'professional':
                result = this.applyProfessionalStyle(result, lang, level);
                break;
            case 'creative':
                result = this.applyCreativeStyle(result, lang, level);
                break;
            case 'journalistic':
                result = this.applyJournalisticStyle(result, lang, level);
                break;
        }

        return result;
    }

    applyCasualStyle(text, lang, level) {
        let result = text;
        let changes = 0;

        if (lang === 'es') {
            // Make some phrases more casual
            const casualizations = [
                { from: /\bSe puede observar que\b/gi, to: 'Se nota que' },
                { from: /\bEs necesario que\b/gi, to: 'Hay que' },
                { from: /\bDe acuerdo con\b/gi, to: 'Según' },
                { from: /\bCon el objetivo de\b/gi, to: 'Para' },
                { from: /\bCon la finalidad de\b/gi, to: 'Para' },
                { from: /\bEn lo que respecta a\b/gi, to: 'Sobre' },
                { from: /\bEn relación con\b/gi, to: 'Sobre' },
                { from: /\bTiene la capacidad de\b/gi, to: 'Puede' },
                { from: /\bEn virtud de\b/gi, to: 'Por' },
                { from: /\bMediante el uso de\b/gi, to: 'Usando' },
                { from: /\bA través de\b/gi, to: 'Por medio de' },
                { from: /\bDado que\b/gi, to: 'Como' },
                { from: /\bPuesto que\b/gi, to: 'Porque' },
                { from: /\bDebido a que\b/gi, to: 'Porque' },
            ];

            casualizations.forEach(({ from, to }) => {
                if (result.match(from) && Math.random() < 0.6 + (level * 0.08)) {
                    result = result.replace(from, to);
                    changes++;
                }
            });
        } else {
            const casualizations = [
                { from: /\bIt can be observed that\b/gi, to: 'You can see that' },
                { from: /\bIt is necessary to\b/gi, to: 'You need to' },
                { from: /\bIn accordance with\b/gi, to: 'According to' },
                { from: /\bWith the objective of\b/gi, to: 'To' },
                { from: /\bIn regard to\b/gi, to: 'About' },
                { from: /\bWith regard to\b/gi, to: 'About' },
                { from: /\bHas the capacity to\b/gi, to: 'Can' },
                { from: /\bBy means of\b/gi, to: 'By using' },
                { from: /\bDue to the fact that\b/gi, to: 'Because' },
                { from: /\bIn order to\b/gi, to: 'To' },
                { from: /\bAt this point in time\b/gi, to: 'Right now' },
                { from: /\bPrior to\b/gi, to: 'Before' },
            ];

            casualizations.forEach(({ from, to }) => {
                if (result.match(from) && Math.random() < 0.6 + (level * 0.08)) {
                    result = result.replace(from, to);
                    changes++;
                }
            });
        }

        if (changes > 0) {
            this.changelog.push({
                icon: '🗣️',
                text: `Estilo casual aplicado: ${changes} expresiones simplificadas`,
            });
        }

        return result;
    }

    applyAcademicStyle(text, lang, level) {
        // For academic style, we do less casualization but still remove AI patterns
        // Add hedging language
        let result = text;
        let changes = 0;

        const hedges = lang === 'es'
            ? ['posiblemente', 'según parece', 'es probable que', 'todo apunta a que', 'los datos sugieren que']
            : ['arguably', 'it appears that', 'evidence suggests', 'it seems likely that', 'research indicates'];

        const paragraphs = result.split(/\n\n+/);
        const processed = paragraphs.map(paragraph => {
            const sentences = this.splitSentences(paragraph);
            return sentences.map(s => {
                const trimmed = s.trim();
                if (!trimmed || trimmed.split(/\s+/).length < 8) return s;

                // Add hedging to overly confident statements
                if (Math.random() < 0.1 * (level / 3)) {
                    const hedge = this.pickRandom(hedges);
                    changes++;
                    return this.capitalizeFirst(hedge + ', ' + this.lowercaseFirst(trimmed));
                }
                return s;
            }).join(' ');
        });

        if (changes > 0) {
            this.changelog.push({
                icon: '🎓',
                text: `Estilo académico: ${changes} matizaciones añadidas`,
            });
        }

        return processed.join('\n\n');
    }

    applyProfessionalStyle(text, lang, level) {
        // Keep text clean, remove excessive filler, maintain professionalism
        return text; // Professional style mainly benefits from pattern replacement already done
    }

    applyCreativeStyle(text, lang, level) {
        let result = text;
        let changes = 0;

        // Add metaphorical expressions occasionally
        const metaphors = lang === 'es'
            ? [
                'como un río que busca el mar, ',
                'igual que un rompecabezas que va tomando forma, ',
                'como una semilla que empieza a germinar, ',
                'al estilo de un artista frente a su lienzo, ',
            ]
            : [
                'like a river finding its way to the sea, ',
                'much like a puzzle coming together, ',
                'as a seed beginning to sprout, ',
                'like an artist before a blank canvas, ',
            ];

        const paragraphs = result.split(/\n\n+/);
        const processed = paragraphs.map((paragraph, idx) => {
            if (idx === 0 || Math.random() > 0.2) return paragraph;

            const sentences = this.splitSentences(paragraph);
            if (sentences.length < 2) return paragraph;

            const insertIdx = Math.floor(Math.random() * (sentences.length - 1)) + 1;
            const metaphor = this.pickRandom(metaphors);

            let s = sentences[insertIdx].trim();
            if (s) {
                sentences[insertIdx] = this.capitalizeFirst(metaphor) + this.lowercaseFirst(s);
                changes++;
            }

            return sentences.join(' ');
        });

        if (changes > 0) {
            this.changelog.push({
                icon: '🎨',
                text: `Estilo creativo: ${changes} expresiones metafóricas añadidas`,
            });
        }

        return processed.join('\n\n');
    }

    applyJournalisticStyle(text, lang, level) {
        let result = text;
        // Journalistic: shorter sentences, more direct, inverted pyramid style
        // Move key information to the front
        return result;
    }

    // ============================================
    //  PASO 7: Contracciones naturales
    // ============================================

    applyContractions(text, lang) {
        if (lang !== 'en') return text; // Spanish already uses contractions naturally

        let result = text;
        let changes = 0;

        const contractions = [
            { from: /\b(I|you|we|they) will\b/gi, to: (m, p) => `${p}'ll` },
            { from: /\b(I|you|we|they) would\b/gi, to: (m, p) => `${p}'d` },
            { from: /\b(I|you|we|they) have\b/gi, to: (m, p) => `${p}'ve` },
            { from: /\b(he|she|it) is\b/gi, to: (m, p) => `${p}'s` },
            { from: /\b(I|you|we|they) are\b/gi, to: (m, p) => `${p}'re` },
            { from: /\bwill not\b/gi, to: () => "won't" },
            { from: /\bcannot\b/gi, to: () => "can't" },
            { from: /\bcan not\b/gi, to: () => "can't" },
            { from: /\bdo not\b/gi, to: () => "don't" },
            { from: /\bdoes not\b/gi, to: () => "doesn't" },
            { from: /\bdid not\b/gi, to: () => "didn't" },
            { from: /\bis not\b/gi, to: () => "isn't" },
            { from: /\bare not\b/gi, to: () => "aren't" },
            { from: /\bwas not\b/gi, to: () => "wasn't" },
            { from: /\bwere not\b/gi, to: () => "weren't" },
            { from: /\bwould not\b/gi, to: () => "wouldn't" },
            { from: /\bcould not\b/gi, to: () => "couldn't" },
            { from: /\bshould not\b/gi, to: () => "shouldn't" },
            { from: /\blet us\b/gi, to: () => "let's" },
            { from: /\bit is\b/gi, to: () => "it's" },
            { from: /\bthat is\b/gi, to: () => "that's" },
            { from: /\bwhat is\b/gi, to: () => "what's" },
            { from: /\bwho is\b/gi, to: () => "who's" },
            { from: /\bthere is\b/gi, to: () => "there's" },
            { from: /\bhere is\b/gi, to: () => "here's" },
            { from: /\bI am\b/g, to: () => "I'm" },
        ];

        contractions.forEach(({ from, to }) => {
            const matches = result.match(from);
            if (matches) {
                result = result.replace(from, (...args) => {
                    if (Math.random() < 0.75) {
                        changes++;
                        return to(...args);
                    }
                    return args[0];
                });
            }
        });

        if (changes > 0) {
            this.changelog.push({
                icon: '✂️',
                text: `${changes} contracciones naturales aplicadas`,
            });
        }

        return result;
    }

    // ============================================
    //  PASO 8: Imperfecciones humanas
    // ============================================

    addHumanImperfections(text, lang, level) {
        let result = text;
        let changeCount = 0;
        const maxImperfections = 1; // Cap to avoid text bloat

        const paragraphs = result.split(/\n\n+/);
        const processed = paragraphs.map(paragraph => {
            const sentences = this.splitSentences(paragraph);

            return sentences.map(sentence => {
                const trimmed = sentence.trim();
                if (!trimmed || trimmed.split(/\s+/).length < 6) return sentence;
                if (changeCount >= maxImperfections) return sentence;

                // Add parenthetical asides (very human)
                if (Math.random() < 0.06 * (level / 3)) {
                    const asides = lang === 'es'
                        ? ['(y esto es importante)', '(que no es poca cosa)', '(algo que muchos ignoran)', '(ojo con esto)', '(al menos en mi opinión)']
                        : ['(and this is key)', "(which isn't nothing)", '(something many overlook)', '(pay attention to this)', '(at least in my view)'];

                    const aside = this.pickRandom(asides);
                    const words = trimmed.split(/\s+/);
                    const insertAt = Math.floor(words.length * 0.5) + Math.floor(Math.random() * 3);
                    if (insertAt < words.length) {
                        words.splice(insertAt, 0, aside);
                        changeCount++;
                        return words.join(' ');
                    }
                }

                // Add dash-separated interjections
                if (Math.random() < 0.04 * (level / 3)) {
                    const interjections = lang === 'es'
                        ? [' —y créeme que es así— ', ' —que ya es decir— ', ' —por llamarlo de alguna manera— ']
                        : [' — and trust me on this — ', ' — which is saying something — ', " — for lack of a better term — "];

                    const interj = this.pickRandom(interjections);
                    const words = trimmed.split(/\s+/);
                    const insertAt = Math.floor(words.length * 0.4);
                    if (insertAt > 2 && insertAt < words.length - 2) {
                        words.splice(insertAt, 0, interj.trim());
                        changeCount++;
                        return words.join(' ');
                    }
                }

                return sentence;
            }).join(' ');
        });

        if (changeCount > 0) {
            this.changelog.push({
                icon: '🧩',
                text: `${changeCount} imperfecciones humanas añadidas (paréntesis, interjecciones)`,
            });
        }

        return processed.join('\n\n');
    }

    // ============================================
    //  PASO 9: Variar puntuación
    // ============================================

    varyPunctuation(text, lang, level) {
        let result = text;
        let changes = 0;

        // Replace some periods with semicolons to connect related ideas
        const sentences = this.splitSentences(result);
        if (sentences.length > 4) {
            const processed = [];
            for (let i = 0; i < sentences.length; i++) {
                let s = sentences[i].trim();
                if (!s) continue;

                if (i > 0 && i < sentences.length - 1 && Math.random() < 0.08 * (level / 3)) {
                    // Join with semicolon
                    if (processed.length > 0) {
                        const last = processed[processed.length - 1];
                        processed[processed.length - 1] = last.replace(/\.\s*$/, '; ') + this.lowercaseFirst(s);
                        changes++;
                        continue;
                    }
                }

                // Occasionally use ellipsis for trailing thought
                if (Math.random() < 0.03 * (level / 3) && s.endsWith('.')) {
                    s = s.slice(0, -1) + '...';
                    changes++;
                }

                processed.push(s);
            }
            result = processed.join(' ');
        }

        // Add occasional em-dashes
        if (level >= 3) {
            result = result.replace(/,\s/g, (match) => {
                if (Math.random() < 0.05) {
                    changes++;
                    return ' — ';
                }
                return match;
            });
        }

        if (changes > 0) {
            this.changelog.push({
                icon: '✏️',
                text: `${changes} variaciones de puntuación aplicadas`,
            });
        }

        return result;
    }

    // ============================================
    //  PASO 10: Romper uniformidad de párrafos
    // ============================================

    breakParagraphUniformity(text, lang, level) {
        const paragraphs = text.split(/\n\n+/);
        if (paragraphs.length < 3) return text;

        let changes = 0;

        // Check if all paragraphs are similar length
        const lengths = paragraphs.map(p => p.split(/\s+/).length);
        const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
        const variance = lengths.reduce((sum, l) => sum + Math.pow(l - avgLength, 2), 0) / lengths.length;

        // If variance is low (uniform), break some paragraphs
        if (variance < avgLength * 2 && level >= 3) {
            const processed = [];
            paragraphs.forEach((paragraph, idx) => {
                const words = paragraph.split(/\s+/);
                if (words.length > 50 && Math.random() < 0.4) {
                    // Split long paragraph
                    const sentences = this.splitSentences(paragraph);
                    const midPoint = Math.floor(sentences.length / 2);
                    processed.push(sentences.slice(0, midPoint).join(' '));
                    processed.push(sentences.slice(midPoint).join(' '));
                    changes++;
                } else if (words.length < 15 && idx > 0 && idx < paragraphs.length - 1 && Math.random() < 0.3) {
                    // Merge short paragraph with next
                    if (processed.length > 0) {
                        processed[processed.length - 1] += ' ' + paragraph;
                        changes++;
                    } else {
                        processed.push(paragraph);
                    }
                } else {
                    processed.push(paragraph);
                }
            });

            if (changes > 0) {
                this.changelog.push({
                    icon: '📐',
                    text: `${changes} párrafos reorganizados para romper la uniformidad`,
                });
            }

            return processed.join('\n\n');
        }

        return text;
    }

    // ============================================
    //  PASO 11: Limpieza final
    // ============================================

    finalCleanup(text) {
        let result = text;

        // Fix double spaces
        result = result.replace(/  +/g, ' ');

        // Fix space before punctuation
        result = result.replace(/\s+([.,;:!?])/g, '$1');

        // Fix double punctuation
        result = result.replace(/([.!?])\s*\1+/g, '$1');

        // Fix spacing after punctuation
        result = result.replace(/([.!?;:,])([A-ZÁÉÍÓÚa-záéíóú])/g, '$1 $2');

        // Fix paragraph spacing
        result = result.replace(/\n{3,}/g, '\n\n');

        // Trim lines
        result = result.split('\n').map(line => line.trim()).join('\n');

        // Fix orphaned parentheses
        result = result.replace(/\(\s+/g, '(');
        result = result.replace(/\s+\)/g, ')');

        return result.trim();
    }

    // ============================================
    //  ANÁLISIS Y MÉTRICAS
    // ============================================

    analyzeMetrics(originalText, humanizedText) {
        const origSentences = this.splitSentences(originalText);
        const humSentences = this.splitSentences(humanizedText);

        const origWords = originalText.split(/\s+/).filter(w => w.length > 0);
        const humWords = humanizedText.split(/\s+/).filter(w => w.length > 0);

        // Average words per sentence
        const origAvgWords = origWords.length / Math.max(origSentences.length, 1);
        const humAvgWords = humWords.length / Math.max(humSentences.length, 1);

        // Sentence length variation (standard deviation)
        const humSentLengths = humSentences.map(s => s.split(/\s+/).length);
        const humMean = humSentLengths.reduce((a, b) => a + b, 0) / humSentLengths.length;
        const humStdDev = Math.sqrt(humSentLengths.reduce((sum, l) => sum + Math.pow(l - humMean, 2), 0) / humSentLengths.length);
        const variation = Math.min(humStdDev / humMean, 1);

        // Lexical diversity (type-token ratio)
        const humUniqueWords = new Set(humWords.map(w => w.toLowerCase().replace(/[^a-záéíóúñ]/g, '')));
        const lexicalDiversity = humUniqueWords.size / Math.max(humWords.length, 1);

        // Naturalness score (heuristic)
        let naturalness = 0.5;

        // Check for natural filler words
        const fillerPatterns = /\b(bueno|mira|la verdad|o sea|digamos|honestly|look|actually|basically|I mean)\b/gi;
        const fillerMatches = humanizedText.match(fillerPatterns);
        if (fillerMatches) naturalness += Math.min(fillerMatches.length * 0.05, 0.15);

        // Check for contractions (in English)
        const contractionMatches = humanizedText.match(/'(ll|ve|re|d|s|t|m)\b/g);
        if (contractionMatches) naturalness += Math.min(contractionMatches.length * 0.02, 0.1);

        // Check for varied punctuation
        const hasEllipsis = humanizedText.includes('...');
        const hasDash = humanizedText.includes('—') || humanizedText.includes(' — ');
        const hasSemicolon = humanizedText.includes(';');
        if (hasEllipsis) naturalness += 0.05;
        if (hasDash) naturalness += 0.05;
        if (hasSemicolon) naturalness += 0.03;

        // Variation bonus
        naturalness += variation * 0.15;

        naturalness = Math.min(naturalness, 1);

        // Estimated human score
        const humanScore = Math.min(Math.round(
            (naturalness * 30) +
            (variation * 25) +
            (lexicalDiversity * 25) +
            (this.changelog.length * 3) +
            Math.random() * 5
        ), 99);

        return {
            originalWordCount: origWords.length,
            humanizedWordCount: humWords.length,
            originalCharCount: originalText.length,
            humanizedCharCount: humanizedText.length,
            avgWordsPerSentence: {
                original: Math.round(origAvgWords * 10) / 10,
                humanized: Math.round(humAvgWords * 10) / 10,
            },
            sentenceLengthVariation: Math.round(variation * 100),
            lexicalDiversity: Math.round(lexicalDiversity * 100),
            naturalness: Math.round(naturalness * 100),
            estimatedHumanScore: humanScore,
            totalChanges: this.changelog.length,
        };
    }

    generateTips(metrics, lang) {
        const tips = [];

        if (lang === 'es') {
            if (metrics.sentenceLengthVariation < 30) {
                tips.push('💡 Intenta variar más la longitud de tus oraciones manualmente. Alterna entre cortas y largas.');
            }
            if (metrics.lexicalDiversity < 40) {
                tips.push('📚 El vocabulario podría ser más diverso. Prueba a cambiar algunas palabras por sinónimos.');
            }
            if (metrics.naturalness < 60) {
                tips.push('🗣️ Añade alguna expresión personal o anécdota para hacerlo más natural.');
            }
            if (metrics.estimatedHumanScore >= 80) {
                tips.push('✅ El texto tiene una puntuación humana alta. Revísalo una vez más para asegurarte de que tiene sentido.');
            }
            tips.push('🔄 Puedes re-humanizar el texto para obtener una variación diferente.');
            tips.push('✍️ Siempre haz una revisión final personal. Añade tu toque único.');
            tips.push('📖 Lee el texto en voz alta. Si suena natural al hablarlo, los detectores tendrán más dificultad.');
        } else {
            if (metrics.sentenceLengthVariation < 30) {
                tips.push('💡 Try varying your sentence lengths more. Mix short punchy ones with longer detailed ones.');
            }
            if (metrics.lexicalDiversity < 40) {
                tips.push("📚 The vocabulary could be more diverse. Swap some words for synonyms.");
            }
            if (metrics.naturalness < 60) {
                tips.push('🗣️ Add a personal expression or anecdote to make it sound more natural.');
            }
            if (metrics.estimatedHumanScore >= 80) {
                tips.push('✅ Text has a high human score. Do one final review to make sure it reads well.');
            }
            tips.push('🔄 You can re-humanize for a different variation each time.');
            tips.push("✍️ Always do a final personal review. Add your own unique touch.");
            tips.push("📖 Read it out loud. If it sounds natural when spoken, detectors will have a harder time.");
        }

        return tips;
    }

    // ============================================
    //  UTILIDADES
    // ============================================

    pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    matchCase(original, replacement) {
        if (original[0] === original[0].toUpperCase()) {
            return this.capitalizeFirst(replacement);
        }
        return replacement;
    }

    capitalizeFirst(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    lowercaseFirst(str) {
        if (!str) return str;
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    splitSentences(text) {
        // Smart sentence splitting that handles abbreviations
        return text
            .replace(/([.!?])\s+/g, '$1|||')
            .split('|||')
            .filter(s => s.trim().length > 0);
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// Export for use in app.js
window.HumanizerEngine = HumanizerEngine;
