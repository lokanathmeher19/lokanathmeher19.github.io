import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TerminalConsole() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { text: 'Connection established...', type: 'system' },
        { text: 'Welcome to LM_OS v2.0. Type "help" to begin.', type: 'system' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let response = [];

            switch (cmd) {
                case 'help':
                    response = [
                        { text: '> help', type: 'cmd' },
                        { text: 'Available commands:', type: 'system' },
                        { text: '  whoami      - display user info', type: 'system' },
                        { text: '  skills      - display skill matrix', type: 'system' },
                        { text: '  clear       - clear terminal output', type: 'system' },
                        { text: '  sudo hack   - ???', type: 'system' },
                    ];
                    break;
                case 'whoami':
                    response = [
                        { text: '> whoami', type: 'cmd' },
                        { text: 'User: Lokanath Meher', type: 'system' },
                        { text: 'Role: Cyber Analyst | ML Enthusiast', type: 'system' },
                        { text: 'Status: ONLINE', type: 'success' },
                    ];
                    break;
                case 'skills':
                    response = [
                        { text: '> skills', type: 'cmd' },
                        { text: 'Loading skill matrix...', type: 'system' },
                        { text: 'Python [██████████] 100%', type: 'success' },
                        { text: 'React  [████████░░] 80%', type: 'success' },
                        { text: 'C++    [█████████░] 90%', type: 'success' },
                        { text: 'XAI    [███████░░░] 70%', type: 'success' },
                    ];
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'sudo hack':
                    response = [
                        { text: '> sudo hack', type: 'cmd' },
                        { text: 'ACCESS DENIED.', type: 'error' },
                        { text: 'Incident reported to sysadmin.', type: 'error' }
                    ];
                    break;
                case '':
                    response = [{ text: '>', type: 'cmd' }];
                    break;
                default:
                    response = [
                        { text: `> ${cmd}`, type: 'cmd' },
                        { text: `Command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' },
                    ];
                    break;
            }

            setHistory(prev => [...prev, ...response]);
            setInput('');
        }
    };

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                background: '#040b14',
                border: '1px solid var(--accent)',
                borderRadius: '8px',
                padding: '20px',
                fontFamily: '"Courier New", Courier, monospace',
                color: '#00ff9d',
                width: '100%',
                maxWidth: '700px',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 0 20px rgba(0,255,157,0.1)',
                marginTop: '2rem'
            }}
            onClick={() => inputRef.current?.focus()}
        >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
            </div>

            <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {history.map((line, i) => (
                    <div key={i} style={{
                        color: line.type === 'error' ? '#ff5f56' : line.type === 'success' ? '#27c93f' : line.type === 'cmd' ? '#fff' : '#00ff9d',
                        marginBottom: '4px',
                        lineHeight: 1.4,
                        fontSize: '15px'
                    }}>
                        {line.text}
                    </div>
                ))}
                <div style={{ display: 'flex', marginTop: '4px', fontSize: '15px' }}>
                    <span style={{ marginRight: '8px', color: '#fff' }}>guest@lm_os:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#00ff9d',
                            outline: 'none',
                            flex: 1,
                            fontFamily: 'inherit',
                            fontSize: 'inherit'
                        }}
                        autoFocus={false}
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </motion.div>
    );
}
