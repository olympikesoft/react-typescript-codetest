import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Autocomplete, TextField, TextareaAutosize, Button, Chip } from '@mui/material';
import { addTags } from '../../../store/actions/Tags/addTags';
import { AppDispatch } from '../../../store/store';
import { viralTags } from '../../../constants';
import { addComment } from '../../../store/actions/Comments/addComment';


interface TagInputProps {
  postId: number;
}

const TagInput: React.FC<TagInputProps> = ({ postId }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleTagChange = (event: React.SyntheticEvent, newValue: string | null) => {
    event.preventDefault();
    if (newValue && !tags.includes(newValue)) {
      const newTags = [...tags, newValue];
      setTags(newTags);
      dispatch(addTags(newTags));
      setBody((prevBody) => `${prevBody}${prevBody ? ' ' : ''}${newValue}`);
    }
    setInputValue('');
  };

  const filterOptions = (options: any[], { inputValue }: any) => {
    let filtered = options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (filtered.length === 0) {
      filtered = [viralTags[0]];
    }

    return filtered;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (body.trim()) {
      dispatch(addComment(postId, body))
    }
    setBody('');
    setTags([]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Autocomplete
        options={viralTags}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={handleTagChange}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField {...params} label="Add Tag" />
        )}
      />
      <div>
        {tags.map(tag => (
          <Chip key={tag} label={tag} style={{ margin: '2px' }} />
        ))}
      </div>
      <TextareaAutosize
        aria-label="Comment Area"
        minRows={3}
        placeholder="Write your comment..."
        onChange={(e) => setBody(e.target.value)}
        style={{ width: '100%' }}
        value={body}
      />
      <Button type="submit" variant="contained" color="primary" disabled={body.trim() === ''}>
        Submit
      </Button>
    </form>
  );
};

export default TagInput;
