import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { validBlog } from '../../scripts/validate';
import { postBlog } from '../../scripts/api';

function PostBlog() {
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [body, setBody] = useState("");
    const [tag, setTag] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!validBlog({ subject, title, topic, body, tag })) return;
        toast.promise(
            postBlog({ subject, title, topic, body, tag }),
            {
                pending: {
                    render() {
                        return "Processing..."
                    },
                    icon: false,
                },
                success: {
                    render({ data }) {
                        setTopic(""); setBody(""); setSubject(""); setTitle(""); setTag("");
                        return <p>Blog posted successfully</p>
                    },
                    icon: "🟢",
                },
                error: {
                    render({ data }) {
                        return <p>{data.message}</p>
                    }
                }
            }
        )
    }

    return (
        <div class="container mx-auto px-4 py-8 ">
            <div class="max-w-4xl mx-auto bg-white p-8 rounded shadow-md ">
                <h2 class="text-2xl font-semibold mb-6 text-center">Write Your Blog To Post</h2>
                <form onSubmit={(e) => submit(e)}>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-semibold mb-2" for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" value={subject} class="w-full border rounded py-2 px-3 text-gray-700" required onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-semibold mb-2" for="title">Title</label>
                        <input type="text" id="title" name="title" value={title} class="w-full border rounded py-2 px-3 text-gray-700" required onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-semibold mb-2" for="tags">Tags (seperate by comma)</label>
                        <input type="text" id="tags" name="tags" value={tag} class="w-full border rounded py-2 px-3 text-gray-700" required onChange={(e) => setTag(e.target.value)} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-semibold mb-2" for="topic">Topic</label>
                        <input type="text" id="topic" name="topic" value={topic} class="w-full border rounded py-2 px-3 text-gray-700" required onChange={(e) => setTopic(e.target.value)} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-semibold mb-2" for="body">Body</label>
                        <textarea id="body" name="body" value={body} rows="5" class="w-full border rounded py-2 px-3 text-gray-700" required onChange={(e) => setBody(e.target.value)}></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer theme="colored" />
        </div>
    )
}

export default PostBlog